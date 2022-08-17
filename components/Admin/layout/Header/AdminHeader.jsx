import React,{useContext} from 'react';
import AuthContext from '@/context/AuthContext/AuthContext';
import Link from 'next/link';


function AdminHeader() {
  const {userAdmin,logoutAdmin} = useContext(AuthContext);
  return (
    <header className="navbar text-center navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <Link href="/admin">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
        Foody
      </a>
    </Link>
     
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="w-100"></div>
      <div className="navbar-nav">
        {userAdmin && 
        <div className="nav-item text-nowrap d-flex align-items-center">
          <span className="nav-link">{userAdmin.name}</span>
          <a onClick={() => logoutAdmin()} className="nav-link px-3 cursor-pointer" >
            خروج
          </a>
        </div>
        }
      </div>
    </header>
  );
}

export default AdminHeader