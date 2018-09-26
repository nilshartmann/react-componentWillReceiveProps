import * as React from "react";

interface CounterState {
  counter: number;
  showCounter: boolean;
}

export default class Counter extends React.Component<{}, CounterState> {
  readonly state: CounterState = {
    counter: 0,
    showCounter: true
  };

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  toggleCounterVisibility = () => {
    this.setState({
      showCounter: !this.state.showCounter
    });
  };

  render() {
    const showCounterLabel = this.state.showCounter ? "Hide Counter" : "Show Counter";
    return (
      <>
        <h1>Counter</h1>
        {this.state.showCounter && <CounterDisplay currentCount={this.state.counter} />}
        <button onClick={this.increaseCounter}>Increase Counter</button>
        <button onClick={this.toggleCounterVisibility}>{showCounterLabel}</button>
      </>
    );
  }
}

interface CounterDisplayState {
  counterLabel: string;
}

interface CounterDisplayProps {
  currentCount: number;
}

class CounterDisplay extends React.Component<CounterDisplayProps, CounterDisplayState> {
  constructor(props: CounterDisplayProps) {
    super(props);

    this.state = {
      counterLabel: "currentCount from cstr: " + props.currentCount
    };
  }

  componentDidMount() {
    // stupid example, but imagine, we would read data for 'counter' for example from a server
    this.setState({
      counterLabel: "currentCount from componentdidMount: " + this.props.currentCount
    });
  }

  componentWillReceiveProps(nextProps: CounterDisplayProps) {
    // stupid example, but imagine, we would read data for 'counter' for example from a server
    // each time the props of this component changes, we need to re-fetch the data
    // (such cheap string manipulations like this would normaly be done in render(), so
    // there would not be a need to implement componentWillReceiveProps)
    this.setState({
      counterLabel: "currentCount from componentWillReceiveProps: " + nextProps.currentCount
    });
  }

  render() {
    return (
      <div style={{ border: "1px solid gray" }}>
        <h2>{this.state.counterLabel}</h2>
      </div>
    );
  }
}
