import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  state = { userName: "", password: "" };

  handleUserName = e => {
    this.setState({ userName: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleClick = () => {
    if (this.state.userName && this.state.password) {
      this.props.history.push("/todolist");
    } else {
    }
  };

  render() {
    return (
      <div>
        <div className="box">
          <h1>Welcome</h1>

          <input
            className="email"
            placeholder="Username"
            type="text"
            value={this.state.userName}
            onChange={this.handleUserName}
            required
            autoFocus
          />
          <br></br>
          <br></br>
          <input
            className="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
            required
            autoFocus
          />

          <button className="btn" onClick={this.handleClick}>
            Login
          </button>
        </div>
        <p>
          Forgot your password?<u>Click Here!</u>
        </p>
      </div>
    );
  }
}
export default withRouter(Login);
