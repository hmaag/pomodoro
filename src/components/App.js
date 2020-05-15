import React from 'react';
import Timer from './Timer';

class App extends React.Component {

    constructor () {
        super()
        this.state = {
            timerRunning: false,
            breakRunning: false,
            minutesLeft: '25',
            secondsLeft: '00',
            workLength: 25,
            breakLength: 5
        }
    }

    toggleTimer = () => {
        const timerStatus = this.state.timerRunning;
        this.setState({
            timerRunning: !timerStatus
        });
        if (!timerStatus) {
            this.createInterval();
        } else {
            clearInterval(this.intervalID);
        }
    }

    createInterval() {
        this.intervalID = setInterval(this.decrementTimer, 1000);
    }

    // Decrements by one second
    decrementTimer = () => {
        let newSecs = Number(this.state.secondsLeft);
        let newMins = Number(this.state.minutesLeft);
        if (newMins === 0 && newSecs === 0) {
            if (!this.state.breakRunning) {
              newMins = this.state.breakLength;
              this.setState({
                breakRunning: true,
              });
            } else {
              newMins = this.state.workLength;
              this.setState({
                breakRunning: false,
              });
            }
        } else if (newSecs === 0) {
            newMins--;
            newSecs = 59;
        } else {
            newSecs--;
        }

        if (newSecs < 10) {
            newSecs = `0${newSecs}`;
        }

        if (newMins < 10) {
            newMins = `0${newMins}`;
        }

        this.setState({
            secondsLeft: newSecs,
            minutesLeft: newMins,
        });
    }

    resetTimer = () => {
        this.setState({
            timerRunning: false,
            breakRunning: false,
            minutesLeft: '25',
            secondsLeft: '00',
            workLength: 25,
            breakLength: 5
        });
        this.toggleTimer();
    }

    render() {
        const style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        return (
            <div className='ui container segment'>
                <h1 style={style} >It's Pomo Time</h1>
                <Timer
                    minutesLeft={this.state.minutesLeft}
                    secondsLeft={this.state.secondsLeft} 
                    toggleTimer={this.toggleTimer}
                    resetTimer={this.resetTimer}
                />
            </div>
        );
    }
}

export default App;