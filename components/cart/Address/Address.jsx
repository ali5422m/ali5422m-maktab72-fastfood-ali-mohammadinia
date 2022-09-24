import React from 'react';
import useSWR from 'swr';
import {toast} from 'react-toastify';
import {handleError} from 'lib/helper';
import Link from "next/link";


const Address = ({setAddressId}) => {
    const { data, error} = useSWR(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/cart/addresses`
    );
    

     if(error){
    toast.error(handleError(error))
  }

  if(!data) return  (<div className="spinner-border spinner-border-sm ms-2"></div>)


    return (
      <>
        {data.length !== 0 ? (
          <>
            <div>انتخاب آدرس</div>
            <select
              onChange={(e) => setAddressId(e.target.value)}
              defaultValue=""
              style={{ width: "200px" }}
              className="form-select ms-3"
              aria-label="Default select example"
            >
              <option value="">انتخاب آدرس</option>
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </>
        ) : (
          <Link href="/profile/addresses">
            <a className="btn btn-primary">ایجاد آدرس</a>
          </Link>
        )}
      </>
    );
}

export default Address