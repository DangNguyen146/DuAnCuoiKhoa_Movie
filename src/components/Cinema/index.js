import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Cinema extends Component {



    render() {
        const { cinema } = this.props;
        return (

            <tr key={cinema.maHeThongRap}>
                <td>{cinema.maHeThongRap}</td>
                <td>{cinema.tenHeThongRap}</td>
                 <td>{cinema.biDanh}</td> 
            

               <td><img src={cinema.logo}/></td> 
      
            </tr>
        )
    }
}



export default connect(null, null)(Cinema);