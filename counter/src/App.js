import React from'react';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        count: 1,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
}
incrementCount() {
  this.setState({
    count:this.state.count + 1
  });
}
decrementCount() {
  if(this.state.count === 0) {
    this.setState({
      count:this.state.count - 0
    });
  } else {
  this.setState({
    count:this.state.count - 1
  });
}
}
  render() {
    return (
      <div className = 'container-fluid'>
        <div className="text-center">
          <h1>Counter</h1>
          <h2>{this.state.count}</h2>
        </div> 
        <Counter 
          incrementFn={this.incrementCount}
          decrementFn={this.decrementCount}
        />
      
      </div>   
    );
  }
}
export default App;