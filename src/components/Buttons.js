import React from 'react';
import Work from './Work';
import Break from './Break';

class Buttons extends React.Component {
    render() {
        return (
            <div className='buttons'>
                <Work
                    running={this.props.running}
                    workTime={this.props.workTime}
                    incrementWorkTime={this.props.incrementWorkTime}
                    decrementWorkTime={this.props.decrementWorkTime}
                />
                <Break
                    running={this.props.running} 
                    breakTime={this.props.breakTime}
                    incrementBreakTime={this.props.incrementBreakTime}
                    decrementBreakTime={this.props.decrementBreakTime}
                />
            </div>
        );
    }
}

export default Buttons;