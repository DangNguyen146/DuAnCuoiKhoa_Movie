import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../../../../components/Loader';
import { fetchListCinemaApi } from '../../CinemaPage/ListCinemaPage/modules/action';
import { fetchGroupCinemaApi } from '../../CinemaPage/ThongTinTheoCumRap/modules/action';
import { fetchAddTicketApi } from './modules/action';

class AddTicketPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: this.props.addTicket,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",

      // maHeThongRap: "",

    };
  }

  componentDidMount() {
    this.props.fetchListCinema(); // Get the project when Component gets Mounted\
  }

  hanldeOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    }
      , () => {
        console.log("handle change ticket: ", this.state);
      });
  };

  addTicket = (e) => {
    e.preventDefault();
    this.props.fectchAddTicket(this.state);
  };



  renderMaHeThongRap = () => {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      data &&
      data.map((item) => {
        return (
          <option
          >{item.maHeThongRap}</option>
        )
      })
    );
  };

  hanldeOnchangeCinema = (e) => {
    const { value } = e.target;
    this.props.fetchMovieCode(value);

  };


  hanldeOnchangeDate = (e) => {
    const { name, value } = e.target;
    const input = value;
    console.log("value: ", value);
    const [year, month, day] = input.split('-');
    const newDate = `${day}/${month}/${year}`;


    this.setState({
      // taiKhoan: taiKhoan,
      [name]: newDate,
    }, () => {
      console.log("handOnChange update movie new date: ", this.state.ngayChieuGioChieu);
    });
  }



  renderMaRap = () => {
    const { loadingGroupCinema, dataGroupCinema } = this.props;
    console.log("dataGroupCinema: ", dataGroupCinema);
    if (loadingGroupCinema) return <Loader />;
    return (
      dataGroupCinema &&
      dataGroupCinema.map((item) => {
        // console.log("dataGroupCinema aaaaaa: ", item.danhSachRap[index].maRap);
        if (loadingGroupCinema) return <Loader />;
        return (
          item.danhSachRap.map((dsItems) => {
            return (
              <option key={dsItems.maRap}>
                {dsItems.maRap}
              </option>
            )
          })

        )
      })
    );
  };





  render() {
    const { data, addTicket } = this.props;
    console.log("addTicket addTicket: ", addTicket);
    return (
      // <div className="container">
      <div className="row" style={{ justifyContent: 'center' }}>
        <div className="col">
          <h2 style={{ textAlign: 'center' }}>Thêm lịch chiếu phim</h2>

          <form onSubmit={this.addTicket} style={{ padding: 20, border: '1px solid' }}>


            <div className="form-group">
              <span>Mã phim</span>
              <input
                className="form-control" defaultValue={addTicket}
                name="maPhim"
                onChange={this.hanldeOnchange}
              />
            </div>
            <div className="form-group">
              <span>Ngày chiếu/giờ chiếu</span>
              <input type="datetime-local"
                className="form-control"
                name="ngayChieuGioChieu"
              //  onChange={this.hanldeOnchange}
              />
            </div>

            <div className="form-group">
              <span>Chọn rạp</span>

              <select id="inputState" className="form-control" name="maHeThongRap"
                onChange={this.hanldeOnchangeCinema}>
                <option selected>Chọn rạp</option>
                {this.renderMaHeThongRap()}
              </select>



            </div>
            <div className="form-group">
              <span>Mã rạp</span>
              {/* <input
            className="form-control"
            name="ngayChieuGioChieu"
            onChange={this.hanldeOnchange}
          /> */}
              <select id="inputState" className="form-control" name="maRap"
                onChange={this.hanldeOnchange}>
                <option selected>Chọn mã rạp</option>
                {this.renderMaRap()}
              </select>



            </div>

            <div className="form-group">
              <span>Giá vé</span>
              <input
                className="form-control"
                name="giaVe"
                onChange={this.hanldeOnchange}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-success" style={{ width: '100%' }}>
                Thêm lịch chiếu phim
              </button>
            </div>
          </form>
        </div>
      </div>
      // </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loadingAddTicket: state.addTicketReducer.loading,
    dataAddTicket: state.addTicketReducer.data,
    errAddTicket: state.addTicketReducer.err,

    loading: state.listCinemaReducer.loading,
    data: state.listCinemaReducer.data,
    // err: state.listCinemaReducer.err,

    loadingGroupCinema: state.groupCinemaReducer.loading,
    dataGroupCinema: state.groupCinemaReducer.data,
    errGroupCinema: state.groupCinemaReducer.err,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fectchAddTicket: (ticket) => {
      dispatch(fetchAddTicketApi(ticket));
    },
    fetchListCinema: () => {
      dispatch(fetchListCinemaApi());
    },
    fetchMovieCode: (maHeThongRap) => {
      dispatch(fetchGroupCinemaApi(maHeThongRap));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTicketPage);