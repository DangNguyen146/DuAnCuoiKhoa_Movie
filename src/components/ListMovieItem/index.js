import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import OpenPopupVideo from "./../../components/Slider/OpenPopupVideo";

export default class ListMovieItem extends Component {
  render() {
    const { movie } = this.props;
    function CutName(name) {
      if (name.length > 11) name = name.slice(0, 12) + "...";
      return name;
    }
    return (
      <>
        <div id="listmovieitem" className="col-6 col-sm-3 col-xl-2 mb-2 px-1 ">
          <div className="card">
            <div className="listItemImg">
              <img className="card-img-top" src={movie.hinhAnh} alt="" />
            </div>
            {/* <div className="popupVideo">
              <OpenPopupVideo id={"gqcpChNYH10"} />
            </div> */}
            <div className="card-body px-3">
              <p className="card-title d-none d-md-block">
                <b>{CutName(movie.tenPhim)}</b>
              </p>
              <Link
                to={`/detail/${movie.maPhim}`}
                className="btn btn-redorange btn-block  shadow-none  border-0"
                variant="contained"
                color="secondary"
              >
                Chi tiết
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
