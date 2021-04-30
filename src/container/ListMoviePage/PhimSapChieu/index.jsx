import React, { Component } from "react";
import { phim_sap_chieu } from "./../modules/Url";
import Slider from "react-slick";
import Loader from "./../../../components/Loader";
import ListMovieItem from "./../../../components/ListMovieItem";
import { connect } from "react-redux";
import { actListMovieApi } from "../modules/action";


class PhimSapChieu extends Component {
  componentDidMount() {
    this.props.fetchListMovie();
  }
  renderLenght = () => {
    const { loading, data } = this.props;

    if (loading) return <Loader />
    return (
      data &&
      data.length
    );
  };
  renderHTML = (temp, resposive) => {
    const { loading, data } = this.props;

    if (loading) return <Loader />
    return (
      data &&
      data.slice(temp, temp + resposive).map((item, i) => {
        return (
          <ListMovieItem key={i} movie={item} />
        )
      })
    );
  };

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    const renderSlides = (resposive) => {
      let temp = this.renderLenght() / resposive;
      let arr = [];
      for (let i = 1; i <= temp; i++) {
        arr.push(i);
      }
      let temp1 = -resposive;
      const { loading } = this.props;

      if (loading) return <Loader />
      return arr.map(() => (
        <div>
          <div className="row mx-0">
            {this.renderHTML(temp1 += resposive, resposive)}
          </div>
        </div>
      ));
    }
    return (
      <div>
        <div className="wow animate__backInLeft" data-wow-delay="0.3s" >
          <Slider ref={c => (this.slider = c)} {...settings} s className="d-none d-lg-block">
            {renderSlides(12)}
          </Slider>
          <Slider ref={c => (this.slider = c)} {...settings} s className="d-none d-md-block d-lg-none">
            {renderSlides(8)}
          </Slider>
          <Slider ref={c => (this.slider = c)} {...settings} s className="d-block d-md-none">
            {renderSlides(4)}
          </Slider>
          <div className="btnSlick">
            <div className="d-none d-lg-block btnLeft" onClick={this.previous}>
              <img src="./img/back-session.png" alt="" />
            </div>
            <div className=" d-none d-lg-block btnRight" onClick={this.next}>
              <img src="./img/next-session.png" alt="" />
            </div>
          </div>
        </div>
      </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMoviceReducer.loading,
    data: state.listMoviceReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actListMovieApi(phim_sap_chieu));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhimSapChieu)