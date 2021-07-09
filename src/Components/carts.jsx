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
  handleDelete = (cartId) => {
    // this.setState({ value: 0 });
    console.log(cartId);
    this.setState({
      items: this.state.items.filter((item) => item.id !== cartId),
    });
  };
  render() {
    return (
      <div>
        {this.state.items.map((item) => (
          <Cart key={item.id} onDelete={this.handleDelete} item={item} />
        ))}
      </div>
    );
  }
}

export default Carts;
