import React from 'react';
import Timer from './Timer';
import WorkButtons from './WorkButtons';
import BreakButtons from './BreakButtons';

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

    incrementWork = () => {
        if (this.state.workLength < 60) {
            let newLength = this.state.workLength + 1;
            let newMinLeft = newLength;
            if (newMinLeft < 10) {
                newMinLeft = `0${newMinLeft}`;
            }
            this.setState({
                workLength: newLength,
                minutesLeft: newMinLeft
            });
        }
    }

    decrementWork = () => {
        if (this.state.workLength > 0) {
            let newLength = this.state.workLength - 1;
            let newMinLeft = newLength;
            if (newMinLeft < 10) {
                newMinLeft = `0${newMinLeft}`;
            }
            this.setState({
                workLength: newLength,
                minutesLeft: newMinLeft
            });
        }
    }

    incrementBreak = () => {
        if (this.state.breakLength < 60) {
            this.setState({
                breakLength: this.state.breakLength + 1
            });
        }
    }

    decrementBreak = () => {
        if (this.state.breakLength > 0) {
            this.setState({
                breakLength: this.state.breakLength - 1
            });
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
        // Convert remaining minutes and seconds to numbers
        let newSecs = Number(this.state.secondsLeft);
        let newMins = Number(this.state.minutesLeft);

        // If we hit zero min/zero seconds, check if it's time for a break, or another working session
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
        } else if (newSecs === 0) { // Else, if seconds hit zero, flip them to 59 and decrement one minute
            newMins--;
            newSecs = 59;
        } else { // Else, decrement one second
            newSecs--;
        }

        // If seconds or minutes go below 10, add a 0 in front
        if (newSecs < 10) { 
            newSecs = `0${newSecs}`;
        }

        if (newMins < 10) {
            newMins = `0${newMins}`;
        }

        // Update the state
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
        clearInterval(this.intervalID);
    }

    render() {
        const style = {
            marginTop: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        return (
            <div className='ui container'>
                <h1 style={style} >It's Pomo Time</h1>
                <Timer
                    minutesLeft={this.state.minutesLeft}
                    secondsLeft={this.state.secondsLeft} 
                    toggleTimer={this.toggleTimer}
                    resetTimer={this.resetTimer}
                />
                <br />
                <WorkButtons 
                    workLength={this.state.workLength}
                    incrementWork={this.incrementWork}
                    decrementWork={this.decrementWork}
                />
                <br />
                <BreakButtons 
                    breakLength={this.state.breakLength}
                    incrementBreak={this.incrementBreak}
                    decrementBreak={this.decrementBreak}
                />
            </div>
        );
    }
}

export default App;