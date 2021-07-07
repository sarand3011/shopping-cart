import React, { Component } from "react";

class Cart extends Component {
  state = {
    value: this.props.value,
    // imgUrl: "https://picsum.photos/300",
    // tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.newMethod()}>{this.counter()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          <b>+</b>
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  newMethod() {
    let classs = "badge p-2 m-2 badge-";
    classs += this.state.value === 0 ? "warning" : "primary";
    return classs;
  }

  counter() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Cart;
