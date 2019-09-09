import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
 
  render() {
      const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* this handles the delete after onDelete is called from child*/}
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
