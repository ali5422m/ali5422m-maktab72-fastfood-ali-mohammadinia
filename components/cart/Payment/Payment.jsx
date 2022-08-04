import axios from "axios";
import { handleError } from "lib/helper";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


const Payment = ({ cart, coupon, addressId }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handlePayment = async () => {
   
    if(addressId === null){
      toast.error('انتخاب آدرس الزامی است');
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_URL}/cart/paymentSend`,
        {
         cart,
         coupon: coupon.code,
         address_id : addressId
        }
      );
      // console.log(res.data)

      router.push(res.data.url)

    } catch (err) {
      toast.error(handleError(err));

    } finally {
      setLoading(false);
    }
  };

  return (

       <button 
       onClick={handlePayment}
       disabled={loading}
       className="user_option btn-auth mt-4">
                          پرداخت
               {loading && (
          <div className="spinner-border spinner-border-sm ms-2"></div>
        )}
        </button>

  );
};

export default Payment;
