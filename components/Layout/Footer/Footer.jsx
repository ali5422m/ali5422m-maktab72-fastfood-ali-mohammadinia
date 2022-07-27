import React from 'react'
import  Link  from 'next/link';

function Footer() {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>تماس با ما</h4>
              <div className="contact_link_box">
                <a href="">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>آدرس</span>
                </a>
                <a href="">
                  <div className="d-flex justify-content-center">
                    <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                    <span className="my-0" style={{ direction: "ltr" }}>
                      0912 000 0000
                    </span>
                  </div>
                </a>
                <a href="">
                  <i className="bi bi-envelope-fill"></i>
                  <span>foody@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <Link href="/">
              <a  className="footer-logo">
                Foody
              </a>
              </Link>
              <p>
                تجربه ی سفارش غذا ،از فودی 
              </p>
              <div className="footer_social">
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>ساعت کاری</h4>
            <p>هر روز</p>
            <p>10.00 صبح تا 12.00 شب</p>
          </div>
        </div>
        <div className="footer-info">
          <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer