import React from 'react';

class Counter extends React.Component {
    render() {
        return(
            <div className='container-fluid'>
                <div className="row">
                {this.props.count}
                <div className="btn-group w-100 mb-3" role="group">
                    <button
                        type="button"
                        class="btn btn-success btn-lg"
                        onClick={this.props.incrementFn}>+
                    </button>
                    <button 
                        type="button"
                        className="btn btn-danger btn-lg"
                    
                    onClick={this.props.decrementFn}>-
                    </button>
                </div>
                </div>
            </div>
        );
    }
}
export default Counter;