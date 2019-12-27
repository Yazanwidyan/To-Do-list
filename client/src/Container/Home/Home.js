import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <button className="btn1">
          <Link to="login">Login</Link>
        </button>

        <button className="btn2">
          <Link to="signup">Signup</Link>>
        </button>
      </div>
    );
  }
}

export default Home;
