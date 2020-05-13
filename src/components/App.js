import React from 'react';
import Tomato from './Tomato';
import IncOrDec from './Buttons';

class App extends React.Component {
    render() {
        return (
            <div className="ui center aligned container">
                <Tomato />
                <IncOrDec />
            </div>
        );
    }
}

export default App;