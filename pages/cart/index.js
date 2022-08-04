import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { numberFormat } from "lib/helper";
import {
  increment,
  decrement,
  removeFromCart,
  clearCart,
} from "@/redux/cart/action";
import  Link  from 'next/link';
import Coupon from "@/components/cart/Coupon/Coupon"



const cartPage = () => {
  const [cart, setCart] = useState(null);
  const [coupon, setCoupon] = useState({ code: null, percent: 0 });
  const state = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  useEffect(() => {
    setCart(state.cart);
  }, [state]);

  if (cart == null) {
    return (
      <div className="cart-loading">
        <div className="spinner-border spinner-border-sm ms-2 cart-spiner"></div>
      </div>
    );
  }

  return (
    <>
      {cart.length != 0 ? (
        <section className="single_page_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="row gy-5">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table align-middle">
                        <thead>
                          <tr>
                            <th>محصول</th>
                            <th>نام</th>
                            <th>قیمت</th>
                            <th>تعداد</th>
                            <th>قیمت کل</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((item) => (
                            <tr key={item.id}>
                              <th>
                                <Image
                                  src={item.primary_image}
                                  placeholder="blur"
                                  blurDataURL={item.primary_image_blurDataURL}
                                  width={100}
                                  height={66}
                                  alt="primary_image"
                                />
                              </th>
                              <td className="fw-bold">{item.name}</td>
                              <td>
                                <div>
                                  {item.is_sale ? (
                                    <>
                                      <span>
                                        {numberFormat(item.sale_price)}
                                      </span>
                                      <del className="me-1">
                                        {numberFormat(item.price)}
                                      </del>
                                    </>
                                  ) : (
                                    <span>{numberFormat(item.price)}</span>
                                  )}
                                  <span>تومان</span>
                                </div>
                              </td>
                              <td>
                                <div className="input-counter">
                                  <span
                                    onClick={() =>
                                      item.qty < item.quantity &&
                                      dispatch(increment(item.id))
                                    }
                                    className="plus-btn"
                                  >
                                    +
                                  </span>
                                  <div className="input-number">{item.qty}</div>
                                  <span
                                    onClick={() =>
                                      item.qty > 1 &&
                                      dispatch(decrement(item.id))
                                    }
                                    className="minus-btn"
                                  >
                                    -
                                  </span>
                                </div>
                              </td>
                              <td>
                                {item.is_sale ? (
                                  <span>
                                    {numberFormat(item.sale_price * item.qty)}
                                  </span>
                                ) : (
                                  <span>
                                    {numberFormat(item.price * item.qty)}
                                  </span>
                                )}
                                <span className="ms-1">تومان</span>
                              </td>
                              <td>
                                <i
                                  onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                  }
                                  className="bi bi-x text-danger fw-bold fs-4 cursor-pointer"
                                ></i>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <button
                      onClick={() => dispatch(clearCart())}
                      className="btn btn-primary mb-4"
                    >
                      پاک کردن سبد خرید
                    </button>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-md-6">
                    <Coupon coupon={coupon} setCoupon={setCoupon} />
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-end align-items-baseline">
                    <div>انتخاب آدرس</div>
                    <select
                      style={{ width: "200px" }}
                      className="form-select ms-3"
                      aria-label="Default select example"
                    >
                      <option>منزل</option>
                      <option>محل کار</option>
                    </select>
                    <a href="profile.html" className="btn btn-primary">
                      ایجاد آدرس
                    </a>
                  </div>
                </div>
                <div className="row justify-content-center mt-5">
                  <div className="col-12 col-md-6">
                    <div className="card">
                      <div className="card-body p-4">
                        <h5 className="card-title fw-bold">مجموع سبد خرید</h5>
                        <ul className="list-group mt-4">
                          <li className="list-group-item d-flex justify-content-between">
                            <div>مجموع قیمت :</div>
                            <div>
                              {numberFormat(cart.reduce((total, product) => {
                                return product.is_sale
                                  ? total + product.sale_price * product.qty
                                  : total + product.price * product.qty;
                              }, 0))}
                            </div>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <div>
                              تخفیف :
                              <span className="text-danger ms-1">
                                {coupon.percent}%
                              </span>
                            </div>
                            <div className="text-danger">
                              {numberFormat(cart.reduce((total, product) => {
                                return product.is_sale
                                  ? total + product.sale_price * product.qty
                                  : total + product.price * product.qty;
                              }, 0) *
                                (coupon.percent / 100))}
                              تومان
                            </div>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <div>قیمت پرداختی :</div>
                              <div>
                                {numberFormat((cart.reduce((total, product) => {
                                return product.is_sale
                                  ? total + product.sale_price * product.qty
                                  : total + product.price * product.qty;
                              }, 0)) - (cart.reduce((total, product) => {
                                return product.is_sale
                                  ? total + product.sale_price * product.qty
                                  : total + product.price * product.qty;
                              }, 0) *
                                (coupon.percent / 100))) }
                                    تومان
                            </div>
                          </li>
                        </ul>
                        <button className="user_option btn-auth mt-4">
                          پرداخت
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="cart-empty">
          <div className="text-center">
            <div>
              <i className="bi bi-basket-fill" style={{ fontSize: "80px" }}></i>
            </div>
            <h4 className="text-bold">سبد خرید شما خالی است</h4>
            <Link href="/menu">
              <a className="btn btn-outline-dark mt-3">مشاهده محصولات</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default cartPage;
