import React from 'react';

class Break extends React.Component {

    incrementHandler = () => {
        if (!this.props.running) { // Can't increment while timer is running
            this.props.incrementBreakTime();
        }
        
    }

    decrementHandler = () => {
        if (!this.props.running) { // Can't decrement while timer is running
            this.props.incrementBreakTime();
        }
    }

    render() {
        return (
            <div>
                <button className='ui icon button' onClick={this.incrementHandler}> 
                    <i className='plus icon'/>
                </button>
                <span> {this.props.breakTime} </span>
                <button className='ui icon button' onClick={this.decrementHandler}> 
                    <i className='minus icon'/>
                </button>
            </div>
        )
    }
}

export default Break;