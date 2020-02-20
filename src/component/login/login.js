import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "./loginAction";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <>
        <div className="loginBox">
          <form method="post" name="userLoginForm">
            <h1> Welcome </h1>
            <div className="row">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter username"
              />

              <div className="errorMsg"></div>
            </div>
            <div className="row">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
              />
              <div className="errorMsg"></div>
            </div>
            <div className="row">
              <input type="checkbox" className="mr-1 mt-3"></input>
              <button
                type="submit"
                className="btn btn-primary ml-3 inputTextBox"
                disabled="disabled"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
