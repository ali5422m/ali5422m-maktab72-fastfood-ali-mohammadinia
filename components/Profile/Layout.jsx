import React from 'react'

const Layout = ({children}) => {
  return (
    <section className="profile_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <li className="list-group-item">
                <a href="./index.html">اطلاعات کاربر</a>
              </li>
              <li className="list-group-item">
                <a href="./addresses.html">آدرس ها</a>
              </li>
              <li className="list-group-item">
                <a href="./orders.html">سفارشات</a>
              </li>
              <li className="list-group-item">
                <a href="./transactions.html">تراکنش ها</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-9">
          {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout