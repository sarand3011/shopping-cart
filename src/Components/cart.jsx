import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div>
        <span className={this.classNamer()}>{this.counter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.item)}
          className="btn btn-secondary btn-sm"
        >
          <b>+</b>
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.item.id)}
          className="btn btn-danger btn-sm m-2 p-2"
        >
          Delete
        </button>
      </div>
    );
  }
  classNamer() {
    let classs = "badge p-2 m-2 badge-";
    classs += this.props.item.value === 0 ? "warning" : "primary";
    return classs;
  }

  counter() {
    const { value } = this.props.item;
    return value === 0 ? "Zero" : value;
  }
}

export default Cart;
