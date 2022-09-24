import React from "react";
import Link from "next/link";

const OrdersList = ({ orders }) => {
  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>شماره سفارش </th>
            <th>وضعیت </th>
            <th> وضعیت پرداخت </th>
            <th> مبلغ پرداختی </th>
            <th>تاریخ ایجاد </th>
            <th> محصولات </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>{order.payment_status}</td>
              <td>{order.paying_amount}</td>
              <td>{order.created_at}</td>

              <td>
                <div className="d-flex">
                  <Link href={`orders/order`}>
                    <a className="btn btn-sm btn-outline-dark me-2">نمایش</a>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
