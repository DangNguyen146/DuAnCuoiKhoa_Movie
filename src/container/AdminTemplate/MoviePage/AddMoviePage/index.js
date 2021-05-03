import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAddMovieApi } from './modules/action';

class AddMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenPhim: "",
      maPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: "",
      danhGia: "",
    };
  }

  hanldeOnchangeDate = (e) => {
    const { name, value } = e.target;
    const input = value;
    const [year, month, day] = input.split('-');
    const newDate = `${day}/${month}/${year}`;

    this.setState({
      // taiKhoan: taiKhoan,
      [name]: newDate,
    }, () => {
      console.log("handOnChange update movie new date: ", this.state.ngayKhoiChieu);
    });
  }

  hanldeOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    }, () => {
      console.log("add movie: ", this.state);
    });
  };

  addMovie = (e) => {
    e.preventDefault();
    this.props.fectchAddMovie(this.state);
  };


  render() {
    return (
     
      <div className="container" >
        <h2 style={{ textAlign: 'center'}}>Thêm phim mới</h2>
        <div className="row p-5" style={{ justifyContent: 'center' }}>
          <div className="col-sm-7" style={{ border: '1px solid black' }}>
            <form onSubmit={this.addMovie} style={{ padding: 10 }}>
              <div className="form-group">
                <label htmlFor="fullName">Mã phim</label>
                <input type="text" className="form-control" id="fullName"
                  name="maPhim"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Tên phim</label>
                <input type="text" className="form-control" id="fullName"
                  name="tenPhim"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Bí danh</label>
                <input type="text" className="form-control" id="fullName"
                  name="biDanh"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Mô tả</label>
                <input type="text" className="form-control" id="fullName"
                  name="moTa"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Hình ảnh</label>
                <input type="text" className="form-control" id="fullName"
                  name="hinhAnh"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group ">
                <label htmlFor="birthday">Lịch chiếu mới</label>
                <input type="date" className="form-control" id="birthday"
                  name="ngayKhoiChieu"
                  onChange={this.hanldeOnchangeDate}


                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Trailer</label>
                <input type="text" className="form-control" id="fullName"
                  name="trailer"
                  onChange={this.hanldeOnchange}

                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Đánh giá</label>
                <select id="inputState" className="form-control" name="danhGia"
                  onChange={this.hanldeOnchange}>
                  
                  <option selected>1</option>
                  <option selected>2</option>
                  <option selected>3</option>
                  <option selected>4</option>
                  <option selected>5</option>
                  <option selected>6</option>
                  <option selected>7</option>
                  <option selected>8</option>
                  <option selected>9</option>
                  <option selected>10</option>

                </select>
              </div>
              <div className="form-group">
                <div className="col">
                  <button type="submit" className="btn btn-primary btn-block">Thêm phim</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fectchAddMovie: (movie) => {
      dispatch(fetchAddMovieApi(movie));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddMoviePage);