import React from 'react';
import Timer from './Timer';
import IncOrDec from './Buttons';

class App extends React.Component {
    state = {count: 0};

    incrementCount = () => {
        this.state.count++;

        this.setState({
            count: this.state.count
        });
    };
    
    decrementCount = () => {
        this.state.count--;

        this.setState({
            count: this.state.count
        });
    };

    render() {
        return (
            <div className="ui center aligned container">
                <p>{this.state.count}</p>
                <IncOrDec button1="Start" button2="Pause" 
                    increment={this.incrementCount} 
                    decrement={this.decrementCount}/>
            </div>
        );
    }
}

export default App;