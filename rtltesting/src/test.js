class MyComponent extends React.Component {
    constructor(props) {
      // set the default internal state
      this.state = {
        clicks: 0
      };
    }
  
    componentDidMount() {
      this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
    }
  
    componentWillUnmount() {
      this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
    }
  
    clickHandler() {
      this.setState({
        clicks: this.clicks + 1
      });
    }
  
    render() {
      let children = this.props.children;
  
      return (
        <div className="my-component" ref="myComponentDiv">
        <h2>My Component ({this.state.clicks} clicks})</h2>
        <h3>{this.props.headerText}</h3>
      {children}
      </div>
      );
    }
  }