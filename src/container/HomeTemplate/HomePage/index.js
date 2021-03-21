import React, { Component } from "react";
import Mobile from "../../../components/Mobile";
import ListMoviePage from "../../ListMoviePage";
import Slider from "./../../../components/Slider";
import Footer from "./../../../components/Footer";
import CinemaListMovie from "../CinemaListMovie";
import { WOW } from "wowjs";

export default class HomePage extends Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: true,
      live: true,
    });

    wow.init();
  }
  render() {
    return (
      <div>
        <Slider />
        <ListMoviePage />
        <div className="d-none d-md-block">
          <CinemaListMovie />
        </div>
        <Mobile />
        <Footer />
      </div>
    );
  }
}