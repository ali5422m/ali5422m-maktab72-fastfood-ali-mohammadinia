import React, { useContext,useEffect,useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext/AuthContext';
import { useSelector} from "react-redux";



const Header = () => {
  const router = useRouter();
  const {user} = useContext(AuthContext);

   const [cart, setCart] = useState([]);
  const state = useSelector((state) => state.shoppingCart);

  useEffect(() => {
    setCart(state.cart);
  }, [state]);


  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link href="/">
            <a className="navbar-brand">
              <span>Foody</span>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                  router.pathname === "/menu" ? "nav-item active" : "nav-item"
                }
              >
                <Link href="/menu">
                  <a className="nav-link">منو</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/about" ? "nav-item active" : "nav-item"
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
              <Link href="/cart">
              <a className="cart_link position-relative" >
                <i className="bi bi-cart-fill text-white fs-5"></i>
                <span className="position-absolute top-0 translate-middle  badge rounded-pill">
                  {cart.length}
                </span>
              </a>
              </Link>

              {user ? (
                <Link href="/profile">
                <a className="btn-auth">
                پروفایل
                </a>
              </Link>
              )
              :
              (
                <Link href="/auth/login">
                <a  className="btn-auth">
                  ورود
                </a>
              </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header