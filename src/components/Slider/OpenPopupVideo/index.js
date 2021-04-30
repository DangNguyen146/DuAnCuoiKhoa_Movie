import { Button } from "bootstrap";
import React, { Component } from "react";
import ModalVideo from "react-modal-video";

export default class OpenPopupVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { id } = this.props;
    return (
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={id}
          youtube={{ mute: 1, autoplay: 1 }}
          onClose={() => this.setState({ isOpen: false })}
        />
        <button
          className="play btn"
          onClick={this.openModal}
          style={{ transform: " translateY(-300%)" }}
        >
          <img src="../img/play-video.png" alt="" />
        </button>
      </React.Fragment>
    );
  }
}
