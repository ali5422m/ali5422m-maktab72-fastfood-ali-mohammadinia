import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import ContactUs from "@/components/Contact/ContactUs/ContactUs";
import ProductsTab from "@/components/Products/ProductsTab/ProductsTab";

import axios from "axios";
import { handleError } from "lib/helper";
import { useEffect } from "react";
import { toast } from "react-toastify";




export default function Home({ productsTab, error }) {
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <>
      <Features />
      {productsTab && <ProductsTab tabs={productsTab} />}
      <About />
      <ContactUs />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("/products/products-tabs");
    // console.log(res.data.data);
    return {
      props: {
        productsTab: res.data.data,
      },
    };
  } catch (err) {
    return {
      props: {
        error: handleError(err),
      },
    };
  }
}