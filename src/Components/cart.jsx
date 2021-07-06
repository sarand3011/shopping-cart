import React, { Component } from "react";

class Cart extends Component {
  state = {
    count: 0,
    // imgUrl: "https://picsum.photos/300",
  };
  Styles = {
    fontSize: 25,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 25 }} className="badge badge-primary p-2 m-2">
          {this.counter()}
        </span>
        <button style={this.Styles} className="btn btn-secondary btn-sm">
          +
        </button>
      </div>
    );
  }
  counter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Cart;
