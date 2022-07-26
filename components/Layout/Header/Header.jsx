import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


function Header() {
    const router = useRouter();

  return (
      <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link href="/">
                <a className="navbar-brand">
                  <span>logo.io</span>
                </a>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li
                    className={
                      router.pathname === "/" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link href="/">
                      <a className="nav-link">صفحه اصلی</a>
                    </Link>
                  </li>
                  <li
                    className={
                      router.pathname === "/menu"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link href="/menu">
                      <a className="nav-link">منو</a>
                    </Link>
                  </li>
                  <li
                    className={
                      router.pathname === "/about"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link href="/about">
                      <a className="nav-link">درباره ما</a>
                    </Link>
                  </li>
                  <li
                    className={
                      router.pathname === "/contact"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link href="/contact">
                      <a className="nav-link">تماس باما</a>
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  <a className="cart_link position-relative" href="cart.html">
                    <i className="bi bi-cart-fill text-white fs-5"></i>
                    <span className="position-absolute top-0 translate-middle  badge rounded-pill">
                      3
                    </span>
                  </a>
                  <a href="login.html" className="btn-auth">
                    ورود
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
  )
}

export default Header