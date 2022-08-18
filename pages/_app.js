import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css"

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Router from "next/router";
import NProgress from "nprogress";
import { AuthProvider } from "@/context/AuthContext/AuthContext";
import { SWRConfig } from "swr";
import { Provider } from "react-redux";
import store from '@/redux/store';
import  AdminLayout  from '@/components/Admin/layout/Layout/AdminLayout';


 axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;



Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  if (Component.getLayout) {


    return Component.getLayout(
      <AuthProvider>
        <SWRConfig value={{ fetcher: (url) => axios.get(url).then((res) => res.data) }}>
        <AdminLayout>
          <Component {...pageProps} />
          <ToastContainer rtl pauseOnFocusLoss pauseOnHover closeOnClick />
        </AdminLayout>
        </SWRConfig>
      </AuthProvider>
    );
  }
  


   

  return (
    <AuthProvider>
      <SWRConfig value={{ fetcher: (url) => axios.get(url).then((res) => res.data) }}>
        <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer rtl pauseOnFocusLoss pauseOnHover closeOnClick />
        </Provider>
      </SWRConfig>
    </AuthProvider>
  );
}
 

export default MyApp;
