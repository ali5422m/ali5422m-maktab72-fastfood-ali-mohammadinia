import React from 'react';
import Image from 'next/image';
import { numberFormat } from 'lib/helper';
import  Link  from 'next/link';

const ProductsAdmin = ({products}) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>تصویر</th>
              <th>نام</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th>
                  <Image
                    src={product.primary_image}
                    width={80}
                    height={53}
                    layout="responsive"
                    alt="primary-image"
                  />
                </th>
                <td>{product.name}</td>
                <td>
                  {product.is_sale ? (
                    <>
                      <span>{numberFormat(product.sale_price)}</span>
                      <del className="me-1">{numberFormat(product.price)}</del>
                    </>
                  ) : (
                    <span>{numberFormat(product.price)}</span>
                  )}
                  <span>تومان</span>
                </td>
                <td>{product.quantity}</td>
                <td>{product.status}</td>
                <td>
                  <div className="d-flex">
                    <Link href={`products/${product.id}`}>
                      <a className="btn btn-sm btn-outline-dark me-2">نمایش</a>
                    </Link>
                    <button className="btn btn-sm btn-dark">حذف</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductsAdmin;
