import React from 'react'
import  Link  from 'next/link';
import { useRouter } from 'next/router';

function Sidebar() {
  const router = useRouter();
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/admin">
              <a
                className={
                  router.pathname == "/admin"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
              >
                <i className="bi bi-grid me-2"></i>
                داشبورد
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/users">
              <a className={router.pathname.includes("/admin/users")
                ? "nav-link active"
                : "nav-link"}>
                <i className="bi bi-people me-2"></i>
                کاربران
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/products">
              <a className="nav-link">
                <i className="bi bi-box-seam me-2"></i>
                محصولات
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-grid-3x3-gap me-2"></i>
              دسته بندی
            </a>
          </li>
          <li className="nav-item">
             <Link href="/admin/orders">
            <a className={router.pathname == "/admin/orders"
                ? "nav-link active"
                : "nav-link"}>
              <i className="bi bi-basket me-2"></i>
              سفارشات
            </a>
            </Link>
          </li>
          <li className="nav-item">
           <Link href="/admin/transactions">
            <a className={router.pathname == "/admin/transactions"
                ? "nav-link active"
                : "nav-link"}>
              <i className="bi bi-currency-dollar me-2"></i>
              تراکنش ها
            </a>
            </Link>
          </li>
          <li className="nav-item">
              <Link href="/admin/coupons">
            <a className={router.pathname == "/admin/transactions"
                ? "nav-link active"
                : "nav-link"}>
              <i className="bi bi-percent me-2"></i>
              تخفیف ها
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar