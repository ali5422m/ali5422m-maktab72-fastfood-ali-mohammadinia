import {handleError} from "lib/helper";
import { toast } from "react-toastify";
import { createContext, useState , useEffect } from "react";
import {  } from "react";
import  axios  from 'axios';
import { useRouter } from 'next/router';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

  const router = useRouter();
  

  useEffect(() => {
    checkUserLoggedIn();
  },[])
    

       const login = async (cellphone) => {
    
        try {
            setLoading(true)
            
            const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/login`, {
                cellphone
            });
            // console.log(res.data)
             toast.success(res.data.message);

        } catch (err) {
            toast.error(handleError(err))
        }finally{
            setLoading(false)
        }
       };

       const checkOtp = async (otp) => {
         try {
           setLoading(true);

           const res = await axios.post(
             `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/checkOtp`,
             {
               otp,
             }
           );
        //    console.log(res.data)
           setUser(res.data.user);
           router.push("/")

         } catch (err) {
           toast.error(handleError(err));
         } finally {
           setLoading(false);
         }
       };

        const resendOtp = async (otp) => {
          try {
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/resendOtp`);
            //    console.log(res.data)
            toast.success("کد ورود دوباره برای شما ارسال شد.")
          } catch (err) {
            toast.error(handleError(err));
          }
        };
       
       const checkUserLoggedIn = async (otp) => {
         try {

           const res = await axios.post(
             `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/me`);
           
        //    console.log(res.data)
           setUser(res.data.user);

         } catch (err) {
           setUser(null)
         } 
  };
  
 
    
    return (
      <AuthContext.Provider
        value={{ user, login, checkOtp, resendOtp, loading }}
      >
        {children}
      </AuthContext.Provider>
    );

}

export default AuthContext;