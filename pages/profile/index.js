import Layout from '@/components/Profile/Layout';
import React,{useState} from 'react';
import useSWR from 'swr';
import {toast} from 'react-toastify';
import {handleError,toFarsiNumber} from 'lib/helper'
import Loading from '@/components/Profile/Loading/Loading';
import { useForm } from "react-hook-form";
import axios from 'axios';


const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const { data, error, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/profile/info`
  );
  // console.log(data, error)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors)

  const onSubmit = async (data) => {
    // console.log(data)
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_URL}/profile/info/edit`,
        {
          data,
        }
      );
      // console.log(res.data)
      mutate(res.data);
      toast.success("ویرایش اطلاعات با موفقیت انجام شد");
    } catch (err) {
      toast.error(handleError(err));
    } finally {
      setLoading(false);
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="vh-70">
        <div className="row g-4">
          <div className="col col-md-6">
            <label className="form-label">نام و نام خانوادگی</label>
            <input
              {...register("name", {
                required: "فیلد نام و نام خانوادگی الزامی است",
              })}
              defaultValue={data.name}
              type="text"
              className="form-control"
            />
            <div className="form-text text-danger">{errors.name?.message}</div>
          </div>
          <div className="col col-md-6">
            <label className="form-label">ایمیل</label>
            <input
              {...register("email", { required: "فیلد ایمیل الزامی است" })}
              defaultValue={data.email}
              type="text"
              className="form-control"
            />
            <div className="form-text text-danger">{errors.email?.message}</div>
          </div>
          <div className="col col-md-6">
            <label className="form-label">شماره تلفن</label>
            <input
              defaultValue={toFarsiNumber(data.cellphone)}
              type="text"
              disabled
              className="form-control"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary mt-4"
        >
          ویرایش
          {loading && (
            <div className="spinner-border spinner-border-sm ms-2"></div>
          )}
        </button>
      </form>
    </Layout>
  );
};

export default ProfilePage