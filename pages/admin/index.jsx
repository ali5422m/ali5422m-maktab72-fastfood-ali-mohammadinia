import React from 'react';
import  useSWR  from 'swr';
import { handleError } from 'lib/helper';
import { toast } from 'react-toastify';
import Loading from '@/components/Profile/Loading/Loading';
import dynamic from "next/dynamic";


const Chart = dynamic(() => import("@/components/Admin/Chart/Chart"), {
  ssr: false,

});

function AdminPanel() {
  const { data, error } = useSWR(
    "http://localhost:3000/api/admin/global?url=/transactions/chart"
  );

  // console.log(data)

  if(error){
    toast.error(handleError(error))
  }

  if (!data) {
    return (
      <Loading />
    )
  }
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h4 className="fw-bold">داشبورد</h4>
            </div>

            <Chart  data={data} />
    </>
     
  );
}

export default AdminPanel;

AdminPanel.getLayout = function PageLayout(page) {
  
  return (
    <>
      {page}
    </>
  )
}