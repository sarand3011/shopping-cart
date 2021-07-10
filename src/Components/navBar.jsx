import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav id="1" className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#1">
          Shopping Cart{" "}
          <span class="badge badge-pill badge-primary">
            {this.props.totalCarts}
          </span>
        </a>
      </nav>
    );
  }
}
export default NavBar;
