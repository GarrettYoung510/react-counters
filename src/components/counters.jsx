import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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
    this.setState({ counters })
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
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* this handles the delete after onDelete is called from child*/}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
