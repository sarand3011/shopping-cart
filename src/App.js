import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/navBar";
import Carts from "./Components/carts";
class App extends Component {
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
  handleDecrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value--;
    this.setState({ items });
  };
  handleReset = () => {
    const items = this.state.items.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ items });
  };

  handleDelete = (cartId) => {
    console.log(cartId);
    this.setState({
      items: this.state.items.filter((item) => item.id !== cartId),
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCarts={this.state.items.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Carts
            items={this.state.items}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
