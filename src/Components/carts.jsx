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
  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };
  handleReset = () => {};
  handleDelete = (cartId) => {
    console.log(cartId);
    this.setState({
      items: this.state.items.filter((item) => item.id !== cartId),
    });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.items.map((item) => (
          <Cart
            key={item.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default Carts;
