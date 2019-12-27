import React from "react";
import { withRouter } from "react-router-dom";

class Signup extends React.Component {
  state = { firstName: "", lastName: "", email: "", mobile: "" };

  handleFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  handleLastName = event => {
    this.setState({ lastName: event.target.value });
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleMobile = event => {
    this.setState({ mobile: event.target.value });
  };

  signupClick = () => {
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.mobile
    ) {
      this.props.history.push("/todolist");
    } else {
      console.log("Please enter the blank fields");
    }
  };

  render() {
    return (
      <div className="box">
        <h1>Signup </h1>

        <input
          placeholder="First name"
          type="text"
          value={this.state.firstName}
          onChange={this.handleFirstName}
        />

        <input
          placeholder="Last name"
          type="text"
          value={this.state.lastName}
          onChange={this.handleLastName}
        />

        <input
          placeholder="Email"
          type="text"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <input
          placeholder="Mobile"
          type="text"
          value={this.state.mobile}
          onChange={this.handleMobile}
        />
        <button className="btn" onClick={this.signupClick}>
          Save
        </button>
      </div>
    );
  }
}

export default withRouter(Signup);
