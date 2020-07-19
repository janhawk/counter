import React from'react';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        count: 1
    };
}
  render() {
    return (
      <div>
        
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <Button onClickFn={() => this.onAction()}></Button>
       
      </div>
    );
  }
}
export default App;