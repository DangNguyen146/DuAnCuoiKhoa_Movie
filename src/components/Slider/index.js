import React, { Component } from "react";
import OpenPopupVideo from "./OpenPopupVideo";

export default class Slider extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide wow animate__fadeInDown"
        data-wow-delay="0s"
        data-ride="carousel"
      >
        <ol className="carousel-indicators d-none d-md-flex">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="./img/lua-deu-gap-lua-dao-16105107337344.jpg"
              alt="First slide"
            />
            {/* <OpenPopupVideo id={"T36HGZagV5w"} /> */}
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./img/tazza-16137903733874.jpg"
              alt="Second slide"
            />
            {/* <OpenPopupVideo id={"gqcpChNYH10"} /> */}
          </div>
        </div>
        <div className="first-child">
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
        </div>
        <div className="last-child">
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
