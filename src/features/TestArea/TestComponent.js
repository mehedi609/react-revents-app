import React, { Component } from "react";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

const mapStateToProps = state => {
  return {
    data: state.test.data
  };
};

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h2>Test Component</h2>
        <h4>The answer is: {data}</h4>
        <Button onClick={incrementCounter} positive content="increment" />
        <Button onClick={decrementCounter} negative content="decrement" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(TestComponent);
