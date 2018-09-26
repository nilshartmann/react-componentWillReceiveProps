# Example of `componentWillReceiveProps` in React

1.  The `Counter` component renders a `CounterDisplay` component
2.  On first (initial) render, `CounterDisplay` is created and it's elements are added to the DOM (`componentDidMount` will be called)
3.  When you increase the counter in `Counter`, `Counter` is-rendered and the already mounted `CounterDisplay` receives a new value - `componentWillReceiveProps` is called
4.  When you hide the counter, the `CounterDisplay` is not rendered anymore and removed from the DOM
5.  When you again show the counter, `CounterDisplay` is created again and its Elements again will show up in the DOM. That is the reason, `componentDidMount` is called now
6.  If you again increase the counter, `CounterDisplay` is already in the DOM and gets new counter via `componentWillReceiveProps`
