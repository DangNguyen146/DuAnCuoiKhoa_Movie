import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../../../../components/Loader';
import { fetchMovieInforApi } from './modules/action';

class MovieInfor extends Component {

    componentDidMount() {
        const { movieInfor } = this.props;
        this.props.fetchMovieInfor(movieInfor.maPhim); // Get the project when Component gets Mounted

    }

    render() {
        const { movieInfor } = this.props;
      
         let date = movieInfor.ngayKhoiChieu;
        let dateC = new Date(date).toLocaleString();
      
        console.log("dateC ìnor: ", dateC);
        return (
            <div className="container">
                {/* <div className="card">
                    <div className="container-fliud"> */}
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    {/* <div className="tab-pane active" id="pic-1"><img src={movieUpdate.hinhAnh} /></div> */}
                                   
                                    <iframe width="560" height="315" src= {movieInfor.trailer}
                                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                                    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  
                                </div>
                              
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{movieInfor.tenPhim}</h3>
                                <div className="rating">
                                    <div className="stars">
                                       
                                        <span><b>Đánh giá:</b> {movieInfor.danhGia}/10</span>
                                        
                                    </div>
                                   
                                </div>
                                <span className="product-description"><b>Mô tả:</b> {movieInfor.moTa}</span>
                                
                                <span className="vote"><b>Ngày khởi chiếu: </b> {dateC}</span>
                                <span className="product-description"><b>Mã phim:</b> {movieInfor.maPhim}</span>
                                <span className="product-description"><b>Mã nhóm:</b> {movieInfor.maNhom}</span>
                              
                            </div>
                        </div>
                    {/* </div>
                </div> */}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.movieInforReducer.loading,
        data: state.movieInforReducer.data,
      
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieInfor: (movieCode) => {
            dispatch(fetchMovieInforApi(movieCode));
        },

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieInfor);