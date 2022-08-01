import Layout from '@/components/Profile/Layout';
import React from 'react';
import useSWR from 'swr';
import {toast} from 'react-toastify';
import {handleError} from 'lib/helper'
import Loading from '@/components/Profile/Loading/Loading';


const profilePage = () => {
  
  const { data, error } = useSWR("/menu");

  console.log(data, error)

  if(error){
    toast.error(handleError(error))
  }

  if(!data) return  <Layout><Loading /></Layout>

  return (
    <Layout>
      <div className="vh-70">
        <div className="row g-4">
          <div className="col col-md-6">
            <label className="form-label">نام و نام خانوادگی</label>
            <input type="text" className="form-control"  />
          </div>
          <div className="col col-md-6">
            <label className="form-label">ایمیل</label>
            <input
              type="text"
              className="form-control"
             
            />
          </div>
          <div className="col col-md-6">
            <label className="form-label">شماره تلفن</label>
            <input
              type="text"
              disabled
              className="form-control"
              
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          ویرایش
        </button>
      </div>
    </Layout>
  );
}

export default profilePage