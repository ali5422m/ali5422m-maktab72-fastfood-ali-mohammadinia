import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { handleError } from 'lib/helper';

const DeleteUser = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3000/api/admin/global?url=/users/${id}`
      );

      toast.success("کاربر مورد نظر با موفقیت حذف شد");
      router.push("/admin/users");
    } catch (err) {
      toast.error(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="btn btn-dark mt-5"
    >
      حذف
      {loading && <div className="spinner-border spinner-border-sm ms-2"></div>}
    </button>
  );
};

export default DeleteUser;
