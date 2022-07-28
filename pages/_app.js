import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css"

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Router from "next/router";
import NProgress from "nprogress";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer rtl pauseOnFocusLoss pauseOnHover closeOnClick />
    </>
  );
}

export default MyApp;
