import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Cinema from '../../../../components/Cinema';
import Loader from '../../../../components/Loader';
import { fetchListCinemaApi } from './modules/action';

class ListCinemaPage extends Component {

    componentDidMount() {
        this.props.fetchListCinema(); // Get the project when Component gets Mounted
    }

    renderHTML = () => {
        const { loading, data } = this.props;

        if (loading) return <Loader />;
        return (
            data &&
            data.map((item) => {
                return <Cinema key={item.maHeThongRap} cinema={item} />;
            })
        );
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                <h2 style={{color: 'white'}}>Hệ thống rạp chiếu phim</h2>

                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Mã hệ thống rạp</th>
                                        <th>Tên hệ thống rạp</th>
                                        <th>Bí danh</th>
                                        <th>Logo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderHTML()}
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.listCinemaReducer.loading,
        data: state.listCinemaReducer.data,
        err: state.listCinemaReducer.err,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListCinema: () => {
            dispatch(fetchListCinemaApi());
        },

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ListCinemaPage);
