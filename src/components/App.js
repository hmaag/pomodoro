import React from 'react';
import Timer from './Timer';
import Buttons from './Buttons';
import Audio from './Audio';

class App extends React.Component {

    render() {
        return (
            <div className='app'>
                <h1>Pomo Time</h1>
                <Timer />
                <Buttons />
                <Audio />
            </div>
        );
    }
}

export default App;