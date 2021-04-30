import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export default class TimeDetaild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexCinema: 0,
    };
  }
  render() {
    const { cumRapChieu } = this.props;

    const renderConllaps = () => {
      let temp = "";
      return this.props.cumRapChieu.map((item, i) => {
        if (i === 0)
          return (
            <div className="card">
              <div className="card-header p-1" id={"heading" + i}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left container-fluid p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target={"#collapse" + i}
                    aria-expanded="true"
                    aria-controls={"collapse" + i}
                    onClick={() => {
                      this.setState({
                        indexCinema: i,
                      });
                    }}
                  >
                    <div className="row">
                      <div className="col-4 col-sm-2">
                        <div
                          style={{
                            height: "55px",
                            width: "100%",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                      </div>
                      <div className="col-8 col-sm-10 text-redorange">
                        {item.tenCumRap}
                      </div>
                    </div>
                  </button>
                </h2>
              </div>
              <div
                id={"collapse" + i}
                className="collapse container-fluid show"
                aria-labelledby={"heading" + i}
                data-parent="#accordionExample"
              >
                <div className="card-body row">
                  {item.lichChieuPhim.map((itemTime) => {
                    return (
                      <>
                        {itemTime.ngayChieuGioChieu.slice(0, 10) !== temp ? (
                          <div class="pl-0 col-12 w-100 text-left ">
                            <span>
                              Xuất chiều ngày{" "}
                              {/* {itemTime.ngayChieuGioChieu.slice(0, 10)} */}
                              {(temp = itemTime.ngayChieuGioChieu.slice(0, 10))}
                            </span>
                          </div>
                        ) : (
                          false
                        )}
                        <Link
                          to={`/datve/${itemTime.maLichChieu}`}
                          className="text-decoration-none"
                        >
                          <Button className="col-4 col-sm-3 col-md-2 w-75 btn border btn-outline-redorange text-redorange mb-3 mr-4">
                            <span className="px-4">
                              {itemTime.ngayChieuGioChieu.slice(12, 16)}
                            </span>
                          </Button>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        else {
          return (
            <div className="card">
              <div className="card-header p-1" id={"heading" + i}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target={"#collapse" + i}
                    aria-expanded="true"
                    aria-controls={"collapse" + i}
                    onClick={() => {
                      this.setState({
                        indexCinema: i,
                      });
                    }}
                  >
                    <div className="row">
                      <div className="col-4 col-sm-2">
                        <div
                          style={{
                            height: "70px",
                            width: "100%",
                            backgroundColor: "#fff",
                          }}
                        ></div>
                      </div>
                      <div className="col-8 col-sm-10 text-redorange">
                        {item.tenCumRap}
                      </div>
                    </div>
                  </button>
                </h2>
              </div>
              <div
                id={"collapse" + i}
                className="collapse container-fluid"
                aria-labelledby={"heading" + i}
                data-parent="#accordionExample"
              >
                <div className="card-body row">
                  {item.lichChieuPhim.map((itemTime) => {
                    return (
                      <>
                        {itemTime.ngayChieuGioChieu.slice(0, 10) !== temp ? (
                          <div class="pl-0 col-12 w-100 text-left ">
                            <span>
                              Xuất chiều ngày
                              {/* {itemTime.ngayChieuGioChieu.slice(0, 10)} */}
                              {(temp = itemTime.ngayChieuGioChieu.slice(0, 10))}
                            </span>
                          </div>
                        ) : (
                          false
                        )}
                        <Link
                          to={`/datve/${itemTime.maLichChieu}`}
                          className="text-decoration-none"
                        >
                          <Button className="col-4 col-sm-3 col-md-2 w-75 btn border btn-outline-redorange text-redorange mb-3 mr-4">
                            {itemTime.ngayChieuGioChieu.slice(12, 16)}
                          </Button>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      });
    };
    return (
      <div className="accordion" id="accordionExample">
        {renderConllaps()}
      </div>
    );
  }
}
