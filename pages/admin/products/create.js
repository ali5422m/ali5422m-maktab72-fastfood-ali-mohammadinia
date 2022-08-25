import { handleError } from "lib/helper";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSWR from "swr";

const CreateProduct = () => {
  const [primaryImage, setPrimaryImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();

  const { data: categories, error } = useSWR("http://localhost:3000/api/admin/global?url=/categories-list");

  if (error) {
    toast.error(handleError(error));
  }

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //     setLoading(true)
    //     const res = await axios.post(`http://localhost:3000/api/admin/global?url=/products`, {
    //         ...data
    //     })
    //     toast.success('کاربر مورد نظر با موفقیت ایجاد شد')

    // } catch (err) {
    //     toast.error(handleError(err))
    // } finally {
    //     setLoading(false)
    // }
  };

  if (watch("primary_image") && watch("primary_image").length > 0) {
    // console.log(watch("primary_image")[0]);

    const reader = new FileReader();
    reader.readAsDataURL(watch("primary_image")[0]);
    reader.onloadend = () => {
      setPrimaryImage(reader.result.toString());
    };
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ایجاد محصول</h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="row gy-4">
        <div className="col-md-12 mb-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <label className="form-label">تصویر اصلی</label>
              {primaryImage ? (
                <div className="position-relative">
                  <Image
                    className="rounded"
                    src={primaryImage}
                    layout="responsive"
                    width={350}
                    height={220}
                    alt="image"
                  />
                  <div
                    className="position-absolute"
                    onClick={() => {
                      resetField("primary_image");
                      setPrimaryImage(null);
                    }}
                    style={{ top: "5px", right: "15px" }}
                  >
                    <i className="bi bi-x text-danger fs-2 cursor-pointer"></i>
                  </div>
                </div>
              ) : (
                <>
                  <input
                    {...register("primary_image", {
                      required: "فیلد تصویر اصلی الزامی است",
                    })}
                    type="file"
                    className="form-control"
                  />
                  <div className="form-text text-danger">
                    {errors.primary_image?.message}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <label className="form-label">تصاویر</label>
          <input
            {...register("images", { required: "فیلد تصاویر الزامی است" })}
            type="file"
            multiple
            className="form-control"
          />
          <div className="form-text text-danger">{errors.images?.message}</div>
        </div>
        <div className="col-md-3">
          <label className="form-label">نام </label>
          <input
            {...register("name", { required: "فیلد نام الزامی است" })}
            type="text"
            className="form-control"
          />
          <div className="form-text text-danger">{errors.name?.message}</div>
        </div>
        <div className="col-md-3">
          <label className="form-label">دسته بندی </label>
          <select
            {...register("category_id", {
              required: "فیلد دسته بندی الزامی است",
            })}
            defaultValue=""
            className="form-control"
          >
            <option value="" disabled>
              انتخاب دسته بندی
            </option>
            {categories &&
              categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
          <div className="form-text text-danger">
            {errors.category_id?.message}
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label">وضعیت</label>
          <select
            {...register("status", { required: "فیلد وضعیت الزامی است" })}
            defaultValue="1"
            className="form-control"
          >
            <option value="1">فعال</option>
            <option value="0">غیر فعال</option>
          </select>
          <div className="form-text text-danger">{errors.status?.message}</div>
        </div>
        <div className="col-md-3">
          <label className="form-label">قیمت</label>
          <input
            {...register("price", { required: "فیلد قیمت الزامی است" })}
            type="text"
            className="form-control"
          />
          <div className="form-text text-danger">{errors.price?.message}</div>
        </div>
        <div className="col-md-3">
          <label className="form-label">تعداد</label>
          <input
            {...register("quantity", { required: "فیلد تعداد الزامی است" })}
            type="text"
            className="form-control"
          />
          <div className="form-text text-danger">
            {errors.quantity?.message}
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label">blurDataURL تصویر اصلی</label>
          <input
            {...register("primary_image_blurDataURL", {
              required: "فیلد blurDataURL الزامی است",
            })}
            type="text"
            className="form-control"
          />
          <div className="form-text text-danger">
            {errors.primary_image_blurDataURL?.message}
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label">قیمت حراجی</label>
          <input
            {...register("sale_price")}
            type="text"
            className="form-control"
          />
          <div className="form-text text-danger">
            {errors.sale_price?.message}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-outline-dark mt-3"
          >
            ایجاد محصول
            {loading && (
              <div className="spinner-border spinner-border-sm ms-2"></div>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateProduct;

CreateProduct.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

