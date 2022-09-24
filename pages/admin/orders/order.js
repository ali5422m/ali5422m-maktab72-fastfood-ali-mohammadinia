import React, { useState } from "react";
import useSWR from "swr";
import { handleError } from "lib/helper";
import { toast } from "react-toastify";
import Loading from "@/components/Profile/Loading/Loading";
import OrdersList from "@/components/Admin/orders/OrdersList";

function OrdersPanel() {
  const [pageIndex, setPageIndex] = useState(0);

  const { data, error } = useSWR(
    `http://localhost:3000/api/admin/global?url=/orders&page=${pageIndex}`
  );

  // console.log(data);

  if (error) {
    toast.error(handleError(error));
  }

  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <div>
        {data.orders.order_items.map((order) => (
          <span>{order.product_name}</span>
        ))}
      </div>

      {/* <div className="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">`محصولات سفارش شماره ${id}`</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th> محصول</th>
                      <th>نام </th>
                      <th> قیمت </th>
                      <th>تعداد </th>
                      <th>قیمت کل </th>
                    </tr>
                                  </thead>
                                  <span>ali</span>
                  <tbody>
                    {data.map((order) => (
                      <tr key={order.id}>
                        <td>{order.product_name}</td>
                        <td>{order.price}</td>
                        <td>{order.quantity}</td>
                        <td>{order.subtotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ShowOrder;

ShowOrder.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
