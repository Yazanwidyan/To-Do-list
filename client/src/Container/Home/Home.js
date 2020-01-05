import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Link to="login">LOGIN</Link>
        </div>
<br></br>
        <div>
          <Link to="signup">SIGNUP</Link>
        </div>
      </div>
    );
  }
}

export default Home;
