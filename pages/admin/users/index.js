import React,{useState} from "react";
import useSWR from "swr";
import { handleError,toFarsiNumber } from "lib/helper";
import { toast } from "react-toastify";
import Loading from "@/components/Profile/Loading/Loading";
import  Link  from 'next/link';
import UserList from "@/components/Admin/users/UserList";



function AdminPanel() {
    const [pageIndex,setPageIndex] = useState(0)

  const { data, error } = useSWR(
    `http://localhost:3000/api/admin/global?url=/users&page=${pageIndex}`
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
        <h4 className="fw-bold">کاربران</h4>
        <Link href="/admin/users/create">
          <a className="btn btn-sm btn-outline-dark">ایجاد کاربر</a>
        </Link>
      </div>

      <UserList users={data.users} />

      <div className="d-flex justify-content-center ">
        <nav aria-label="navigation">
          <ul className="pagination">
            {data.meta.links.slice(1, -1).map((link, index) => (
                <li key={index} className={link.active ? "page-item active" : "page-item"}>
                  <button onClick={() => setPageIndex( link.label )}
                    className="page-link" disabled={link.active}>
                    <span>{toFarsiNumber(link.label)}</span>
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default AdminPanel;

AdminPanel.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
