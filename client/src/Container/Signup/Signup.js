import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Signup extends React.Component {
  state = { firstName: "",
            lastName: "",
            email: "",
            password: ""
  };

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
    this.setState({ password: event.target.value });
  };

  signupClick = () => {
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password
    ) {
      axios.post("http://localhost:3001/signup", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }).then(()=>{
        // this.props.history.push("/todolist");

      }).catch(()=> console.log('hhhh'));
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
          placeholder="password"
          type="password"
          value={this.state.password}
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
