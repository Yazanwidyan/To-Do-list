import React from "react";

class Signup extends React.Component {
  state = { firsname: "" };
  

  handleFirstName = event => {
    this.setState({ firsname: event.target.value });
  };

  signupClick = () => {
      if(this.state.firsname) {
          console.log("Done");
      } else {
          console.log('Please Fuck Yourself')
      }
  };

  render() {
    return (
      <div>
        <div>
          First Name
          <input
            type="text"
            value={this.state.firsname}
            onChange={this.handleFirstName}
          />
        </div>
        <div>
          Last Name
          <input />
        </div>
        <div>
          Email
          <input />
        </div>
        <div>
          Mobile
          <input />
        </div>
        <button onClick={this.signupClick}>Save</button>
      </div>
    );
  }
}

export default Signup;
