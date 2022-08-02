import Layout from "@/components/Profile/Layout";
import React from "react";
import useSWR from "swr";
import { toast } from "react-toastify";
import { handleError } from "lib/helper";
import Loading from "@/components/Profile/Loading/Loading";
import CreateAddress from "@/components/Profile/Address/CreateAddress/CreateAddress";
import EditAddress from "@/components/Profile/Address/EditAddress/EditAddress";


const profileAddressPage = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/profile/addresses`
  );
  // console.log(data, error)


  if (error) {
    toast.error(handleError(error));
  }

  if (!data)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return (
    <Layout>
          <CreateAddress provinces={data.provinces} cities={data.cities} />
          <hr />
          {/* {data.addresses.map((address, index) => (
              <EditAddress key={index}  />
          ))} */}
          
                   
    </Layout>
  );
};

export default profileAddressPage;
