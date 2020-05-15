import React from 'react';

class Work extends React.Component {

    incrementHandler = () => {
        if (!this.props.running) { // Can't increment while timer is running
            this.props.incrementWorkTime();
        }
    }

    decrementHandler = () => {
        if (!this.props.running) { // Can't decrement while timer running
            this.props.decrementWorkTime();
        }
    }

    render() {
        return (
            <div>
                <button className='ui icon button' onClick={this.incrementHandler}> 
                    <i className='plus icon'/>
                </button>
                <span> {this.props.workTime} </span>
                <button className='ui icon button' onClick={this.decrementHandler}> 
                    <i className='minus icon'/>
                </button>
            </div>
        )
    }
}

export default Work;