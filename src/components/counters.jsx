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

  handleDelete = counterId => {
    //   filters c by c.id and whichever does not equal to the one selected stays
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // setting the state because we update the state
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {/* this handles the delete after onDelete is called from child*/}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
