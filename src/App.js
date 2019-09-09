import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleIncrement = counter => {
    //   clones the array and all that is in it
    const counters = [...this.state.counters];
    // gets index of the counter
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // sets state using the index of the counter and what we saw above
    this.setState({ counters });
  };

  handleDelete = counterId => {
    //   filters c by c.id and whichever does not equal to the one selected stays
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // setting the state because we update the state
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        {/* will filter counters with value higher than 0 */}
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
