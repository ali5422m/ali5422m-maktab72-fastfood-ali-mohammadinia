import React from 'react'

function Features() {
  return (
    <section className="card-area layout_padding">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon-wrapper">
                  <i className="bi bi-telephone-fill fs-2 text-white card-icon"></i>
                </div>
                <p className="card-text fw-bold"> کیفیت برتر</p>
                <p className="card-text">
                    سرعت پاسخگویی بلکه کیفیت نیز شماره یک است.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon-wrapper">
                  <i className="bi bi-clock-fill fs-2 text-white card-icon"></i>
                </div>
                <p className="card-text fw-bold"> تحویل سریع</p>
                <p className="card-text">
                    تحویل به موقع بلکه زودتر از زمان ممکن .
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon-wrapper">
                  <i className="bi bi-geo-alt-fill fs-2 text-white card-icon"></i>
                </div>
                <p className="card-text fw-bold"> سفارش آسان</p>
                <p className="card-text">
                        با کمترین مرحله غذات را سفارش بده. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features