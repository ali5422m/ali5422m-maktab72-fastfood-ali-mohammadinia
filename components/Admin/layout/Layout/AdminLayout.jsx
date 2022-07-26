import React from 'react'
import AdminHeader from '@/components/admin/layout/Header/AdminHeader';
import Sidebar from "@/components/Admin/layout/Sidebar/Sidebar";
import { useRouter } from "next/router";



function AdminLayout({children}) {
  const router = useRouter();

  if(router.pathname == "/admin/auth/login"){
    return (
      <>
        <div>{children}</div>
    
      </>
    )
  }


  return (
    <>
      <AdminHeader />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>

        </div>
      </div>
    </>
  );
}

export default AdminLayout