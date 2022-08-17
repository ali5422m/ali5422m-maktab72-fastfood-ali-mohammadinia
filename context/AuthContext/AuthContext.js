import {handleError} from "lib/helper";
import { toast } from "react-toastify";
import { createContext, useState , useEffect } from "react";
import  axios  from 'axios';
import { useRouter } from 'next/router';
import AdminHeader from './../../components/Admin/layout/Header/AdminHeader';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [userAdmin, setUserAdmin] = useState(null);
  

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
  

   const logout = async () => {
     try {
       setLoading(true);

       const res = await axios.post(
         `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/logout` );
       //    console.log(res.data)
       setUser(null);
       router.push("/");
     } catch (err) {
       toast.error(handleError(err));
     } finally {
       setLoading(false);
     }
  };
  

  // Admin panel


  // login Admin

  const loginAdmin = async ({ email, password }) => {
    try {
      setLoading(true);
           const res = await axios.post(
             `${process.env.NEXT_PUBLIC_APP_API_URL}/admin/auth/login`,
             {
               email,
               password,
             }
           );

      setUserAdmin(res.data.data.user);
      
      router.push("/admin");

      
      } catch (err) {
        toast.error(handleError(err));
    }finally{
        setLoading(false);
      }
  }

  // Logout Admin


    const logoutAdmin = async () => {
    try {
      setLoading(true);
           const res = await axios.post(
             `${process.env.NEXT_PUBLIC_APP_API_URL}/admin/auth/logout`);

      setUserAdmin(null);
      
      router.push("/admin/auth/login");

      
      } catch (err) {
        toast.error(handleError(err));
    }finally{
        setLoading(false);
      }
  }

 
 
    
    return (
      <AuthContext.Provider
        value={{
          user,
          login,
          checkOtp,
          resendOtp,
          loading,
          logout,
          loginAdmin,
          userAdmin,
          logoutAdmin,
        }}
      >
        {children}
      </AuthContext.Provider>
    );

}

export default AuthContext;