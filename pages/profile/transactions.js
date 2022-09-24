import Layout from "@/components/Profile/Layout";
import React,{useState} from "react";
import useSWR from "swr";
import { toast } from "react-toastify";
import { handleError,numberFormat,toFarsiNumber } from "lib/helper";
import Loading from "@/components/Profile/Loading/Loading";
import Image from 'next/image';



const ProfileAddressPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_APP_API_URL}/profile/transactions?page=${pageIndex}`);
  // console.log(data, error)


  if (error) {
    toast.error(handleError(error));
  }

  if (!data)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return (
    <Layout>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>شماره پیگیری</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <th>{toFarsiNumber(transaction.order_id)}</th>
                <td>{toFarsiNumber(numberFormat(transaction.amount))} تومان</td>
                <td>
                  <span className={transaction.status == "موفق" ? "text-success" : "text-danger"}>{transaction.status}</span>
                </td>
                <td>{transaction.trans_id ? toFarsiNumber(transaction.trans_id) : transaction.trans_id}</td>
                <td>{toFarsiNumber(transaction.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="d-flex justify-content-center mt-5">
        <ul className="pagination">
          {data.meta.links.slice(1, -1).map((link, index) => (
            <li
              key={index}
              className={link.active ? "page-item active" : "page-item"}
            >
              <button
                onClick={() => setPageIndex(link.label)}
                className="page-link"
              >
                {toFarsiNumber(link.label)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </Layout>
  );
};

export default ProfileAddressPage;
