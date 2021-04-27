import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Mobile extends Component {
  render() {
    return (
      <section
        className="mobile-app wow animate__fadeInDown "
        data-wow-delay="0.3s"
        style={{ backgroundImage: "url(./img/backapp.jpg)" }}
      >
        <div className="container center">
          <div className="row py-5 px-0">
            <div className="col-12 p-1 p-md-2 text-center text-md-left col-md-6">
              <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
              <p className="py-2">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <button className="btn btn-redorange">
                App miễn phí - tải về ngay
              </button>
              <p className="p-1">
                TIX có hai phiên bản
                <span>
                  <u>
                    <NavLink to="/" className="text-reset">
                      iOS
                    </NavLink>
                  </u>
                </span>
                &amp;
                <span>
                  <u>
                    <NavLink to="/" className="text-reset" alt="">
                      Android
                    </NavLink>
                  </u>
                </span>
              </p>
            </div>
            <div className="col-3 col-md-1" />
            <div className="col col-md-3">
              <div className="mobile">
                <div
                  id="mobileCrosel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./img/slide1.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide2.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide3.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide4.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide5.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide6.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide7.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide8.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide9.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide12.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide13.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide14.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide15.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/slide16.jpg"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#mobileCrosel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#mobileCrosel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 col-md-2"></div>
          </div>
        </div>
      </section>
    );
  }
}
