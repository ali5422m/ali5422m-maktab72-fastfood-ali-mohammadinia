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

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

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
