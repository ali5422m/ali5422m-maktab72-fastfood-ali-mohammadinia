import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { handleError } from "lib/helper";
import { toast } from "react-toastify";
import Loading from "@/components/Profile/Loading/Loading";
import  Image  from 'next/image';

const ShowProduct = () => {
  const router = useRouter();
  console.log(router.query.id);
  const { data, error } = useSWR(
    router.query.id &&
      `http://localhost:3000/api/admin/global?url=/products/${router.query.id}`
  );

  console.log(data);

  if (error) {
    toast.error(handleError(error));
  }

  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">محصول : {data.name}</h4>
      </div>
      <div>
        <div className="row gy-4">
          <div className="col-md-3">
            <Image
              src={data.primary_image}
              width={80}
              height={53}
              layout="responsive"
              alt="primary-image"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">نام</label>
            <input
              type="text"
              className="form-control"
              disabled
              placeholder={data.name}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">شماره تماس</label>
            <input
              type="text"
              className="form-control"
              disabled
              placeholder={data.cellphone}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;

ShowProduct.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
