import React from 'react'

const  EditAddress = () => {
  return (
    <>
      <div className="card card-edit card-body">
        <div className="row g-4">
          <div className="col col-md-6">
            <label className="form-label">عنوان</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col col-md-6">
            <label className="form-label">شماره تماس</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col col-md-6">
            <label className="form-label">کد پستی</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col col-md-6">
            <label className="form-label">استان</label>
            <select className="form-select" aria-label="Default select example">
              <option>تهران</option>
              <option>اصفهان</option>
              <option>فارس</option>
              <option>یزد</option>
            </select>
          </div>
          <div className="col col-md-6">
            <label className="form-label">شهر</label>
            <select className="form-select" aria-label="Default select example">
              <option>تهران</option>
              <option>اصفهان</option>
              <option>شیراز</option>
              <option>یزد</option>
            </select>
          </div>
          <div className="col col-md-12">
            <label className="form-label">آدرس</label>
            <textarea type="text" rows="5" className="form-control"></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-primary">ویرایش</button>
          <button className="btn btn-dark">حذف</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default EditAddress