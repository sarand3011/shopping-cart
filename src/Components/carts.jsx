import React, { Component } from "react";
import Cart from "./cart";
class Carts extends Component {
  state = {
    items: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.items.map((item) => (
          <Cart key={item.id} value={item.value} selected={true} />
        ))}
      </div>
    );
  }
}

export default Carts;
