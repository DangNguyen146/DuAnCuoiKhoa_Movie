import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <div class="text-center text-redorange">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}
