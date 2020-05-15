import React from 'react';
import Timer from './Timer';
import Buttons from './Buttons';
import Audio from './Audio';

class App extends React.Component {

    constructor () {
        super()
        this.state = {
            running: false,
            id: 0,
            currentTime: "25 : 00",
            sessionStatus: 'Working',
            workTime: 25,
            breakTime: 5,
            audio: 'on'
        }
    }

    setAudio = (audio) => {
        this.setState({
            audio: audio
        })
    }

    incrementWorkTime = () => {
        this.setState({
            workTime: this.state.workTime + 1
        })

        this.setTime(this.state.workTime);
    }

    decrementWorkTime = () => {
        this.setState({
            workTime: this.state.workTime - 1
        })

        this.setTime(this.state.workTime);
    }

    incrementBreakTime = () => {
        this.setState({
            breakTime: this.state.breakTime + 1
        })

        this.setTime(this.state.breakTime);
    }

    decrementBreakTime = () => {
        this.setState({
            breakTime: this.state.breakTime - 1
        })

        this.setTime(this.state.breakTime);
    }

    setTime = (time) => {
        this.setState({
            currentTime: `${time} : 00`
        })
    }

    toggleRunning = () => {
        if (this.state.running === false) {
            this.setState({
                running: true
            })
        } else {
            this.setState({
                running: false
            })
        }
    }

    startTimer = (duration) => {
        this.setState({
            running: true
        });
        let time = duration * 60, minutes, seconds;
        let runningTimer = setInterval(() => {
            this.setState({
                id: runningTimer
            })

            minutes = Math.floor(time / 60);
            seconds = time - minutes * 60;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            this.setState({
                currentTime: `${minutes} : ${seconds}`
            });

            if (this.state.sessionStatus === 'Working') {
                this.setState({
                    sessionStatus: 'Break',
                    running: false
                })
                clearInterval(this.state.id);
                this.startTimer(this.state.breakTime);
            } else {
                this.setState({
                    sessionStatus: 'Working',
                    running: false
                })
                clearInterval(this.state.id);
                this.startTimer(this.state.workTime);
            }
        }, 1000)
    }

    render() {
        return (
            <div className='ui container'>
                <h1>Pomo Time</h1>
                <Timer
                    sessionStatus={this.state.sessionStatus}
                    startTimer={this.startTimer} 
                    currentTime={this.state.currentTime}
                    running={this.state.running}
                    setTime={this.setTime}
                    toggleRunning={this.toggleRunning}
                />
                <Buttons
                    running={this.state.running}
                    workTime={this.state.workTime}
                    breakTime={this.state.breakTime}
                    incrementWorkTime={this.incrementWorkTime}
                    decrementWorkTime={this.decrementWorkTime}
                    incrementBreakTime={this.incrementBreakTime}
                    decrementBreakTime={this.decrementBreakTime}
                />
                <Audio setAudio={this.setAudio} audio={this.state.audio}/>
            </div>
        );
    }
}

export default App;