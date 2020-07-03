import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <Link to="/" style={{fontFamily: "monospace" }}>HOME</Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;