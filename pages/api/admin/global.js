import { handleError } from "lib/helper";
import axios from "axios";


export default async function handler(req, res) {

  if (!req.cookies.token) {
    res.status(403).json({ message: "ورود ناموفق یکبار دیگر تلاش کنید" });
    return;
  } else if (req.method === "GET") {
    
    console.log(req.query.url)

    try {
      const resApi = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ADMIN_API_URL}${req.query.url}`,
        {
          headers: {
            Authorization: `Bearer ${req.cookies.token}`,
          },
        }
      );
    
      res.status(200).json( resApi.data.data );
    } catch (err) {
      res.status(422).json({ message: { 'err': [handleError(err)] } });
    }
  } 
}
