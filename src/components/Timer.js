import React from 'react';

class Timer extends React.Component {

    state = {
        toggleIcon: 'play icon',
        resetIcon: 'redo icon'
    }

    toggleTimer = () => {
        if (this.state.toggleIcon === 'play icon') {
            this.props.toggleTimer();
            this.setState({
                toggleIcon: 'pause icon'
            })
        } else {
            this.props.toggleTimer();
            this.setState({
                toggleIcon: 'play icon'
            })
        }
    }

    resetTimer = () => {
        this.setState({
            toggleIcon: 'play icon'
        });
        this.props.resetTimer();
    }

    render() {
        const style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        return (
            <div>
                <span style={style}> {this.props.minutesLeft}:{this.props.secondsLeft} </span>
                <br />
                <div style={style}>
                    <button className='ui icon button' onClick={this.toggleTimer}>
                        <i className={this.state.toggleIcon} />
                    </button>
                    <button className='ui icon button' onClick={this.resetTimer}>
                        <i className={this.state.resetIcon} />
                    </button>
                </div>
            </div>
            
        )
    }
}

export default Timer;