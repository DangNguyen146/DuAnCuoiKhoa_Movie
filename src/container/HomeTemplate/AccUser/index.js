import React, { Component } from "react";
import CreateAcc from "./CreateAcc";
import Login from "./Login";

export default class AccUser extends Component {
  componentDidMount() {
    const isLogin = JSON.parse(localStorage.getItem("createAcc"));
    if (isLogin === "true") {
      localStorage.setItem("createAcc", JSON.stringify("true"));
      const container = document.querySelector(".container");
      container.classList.add("sign-up-mode");
    } else {
      localStorage.setItem("createAcc", JSON.stringify("false"));
      const container = document.querySelector(".container");
      container.classList.remove("sign-up-mode");
    }
  }

  render() {
    return (
      <section id="login">
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <Login history={this.props.history} />
              <CreateAcc history={this.props.history} />
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Chưa có tài khoản?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, ex ratione. Aliquid!
                </p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  onClick={() => {
                    localStorage.setItem("createAcc", JSON.stringify("true"));
                    const container = document.querySelector(".container");
                    container.classList.add("sign-up-mode");
                  }}
                >
                  Đăng kí
                </button>
              </div>
              <div className="image"></div>
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Đã có tài khoản ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam ad deleniti.
                </p>
                <button
                  className="btn transparent"
                  id="sign-in-btn"
                  onClick={() => {
                    localStorage.setItem("createAcc", JSON.stringify("false"));
                    const container = document.querySelector(".container");
                    container.classList.remove("sign-up-mode");
                  }}
                >
                  Đăng nhập
                </button>
              </div>
              <div className="image"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
