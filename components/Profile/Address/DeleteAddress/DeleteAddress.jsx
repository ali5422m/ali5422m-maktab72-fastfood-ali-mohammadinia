import React,{useState} from "react";
import { useForm } from "react-hook-form";
import {handleError} from 'lib/helper'
import axios from 'axios';
import {toast} from 'react-toastify';
import {useSWRConfig} from "swr";

const DeleteAddress = ({id}) => {
    const {mutate} = useSWRConfig();

    const [loading,setLoading] = useState(false)
 

  const handleDelete = async () => {
  
    try{
        setLoading(true)
        const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/profile/addresses/delete`,{
          address_id : id
        })
        toast.success('  حذف آدرس با موفقیت انجام شد ')
        // console.log(res.data)
        mutate(`${process.env.NEXT_PUBLIC_APP_API_URL}/profile/addresses`);  

    }catch(err){

        toast.error(handleError(err))

    }finally{
        setLoading(false)
    }
  };

  return (
    
      <button
            onClick={handleDelete}
            disabled={loading}
            className="btn btn-dark "
          >
            حذف
            {loading && (
              <div className="spinner-border spinner-border-sm ms-2"></div>
            )}
          </button>
    
  );
}

export default DeleteAddress;
