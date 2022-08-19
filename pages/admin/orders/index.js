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
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">سفارشات</h4>
      </div>

      <OrdersList orders={data.orders} />

      <div className="d-flex justify-content-center ">
        <nav aria-label="navigation">
          <ul className="pagination">
            {data.meta.links.slice(1, -1).map((link, index) => (
              <li
                key={index}
                className={link.active ? "page-item active" : "page-item"}
              >
                <button
                  onClick={() => setPageIndex(link.label)}
                  className="page-link"
                  disabled={link.active}
                >
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default OrdersPanel;

OrdersPanel.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
