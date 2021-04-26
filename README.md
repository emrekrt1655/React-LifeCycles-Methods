# Component Lifecycle

constructor               =====>>>> Immediately before initial rendering
componentWillMount        =====>>>> Immediately before initial rendering
componentDidMount         =====>>>> Immediately after initial rendering
componentWillRecieveProps =====>>>> When component receiving new props or state
shouldComponentUpdate     =====>>>> Before rendering, after receiving new props or state (returns false to prevent rendering!)
componentWillUpdate       =====>>>> Before rendering, after receiving new props or state
componentDidUpdate        =====>>>> After component's updates are flushed to DOM
componentWillUnmount      =====>>>> Immediately before removing component from DOM

four ways to trigger render() method:
    1) initial render
    2) setState()
    3) parent component re-render
    4) forceUpdate()

componentWillMount(), componentWillRecieveProps() and componentWillUpdate() are deprecated.