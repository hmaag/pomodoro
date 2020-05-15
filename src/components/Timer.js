import React from 'react';
//import './Timer.css';

class Timer extends React.Component {

    state = {
        toggleIcon: 'play icon',
        resetIcon: 'redo icon'
    }

    timer = () => {
        if (this.state.toggleIcon === 'play icon') {
            this.props.startTimer(this.props.currentTime);
            this.setState({
                toggleIcon: 'pause icon'
            })
        } else {
            this.props.toggleRunning();
            this.setState({
                toggleIcon: 'play icon'
            })
        }
    }

    reset = () => {
        this.props.setTime('25 : 00');
    }

    render() {
        return (
            <div>
                <span> {this.props.session} </span>
                <br />
                <span> {this.props.currentTime} </span>
                <br />
                <button className='ui icon button' onClick={this.timer}>
                    <i className={this.state.toggleIcon} />
                </button>
                <button className='ui icon button' onClick={this.reset}>
                    <i className={this.state.resetIcon} />
                </button>
            </div>
        )
    }
}

export default Timer;