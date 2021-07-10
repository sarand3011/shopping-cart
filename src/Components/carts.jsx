import React, { Component } from "react";
import Cart from "./cart";
class Carts extends Component {
  render() {
    const { onDelete, items, onIncrement, onDecrement, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {items.map((item) => (
          <Cart
            key={item.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default Carts;
