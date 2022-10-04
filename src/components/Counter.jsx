import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.counter = this.counter.bind(this);
    }

    counter() {
        this.setState({count:this.state.count + 1});
    }

    render() {
        return (
            <div className='container'>
                <h1 style={{color: 'red'}}>Hello, world! </h1>
                <h4>This a one thing.</h4>
                <button onClick={this.counter}>Click me</button>
                <p>I have been toggled <span>{this.state.count}</span> times</p>
            </div>
        );
    }
}

export default Counter;