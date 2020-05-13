import React from 'react';

let count = 0;

const IncOrDec = (props) => {
    return (
        <div className="ui buttons">
            <button onClick={props.increment} className="ui positive button">
                {props.button1}
            </button>
            <div className="or"></div>
            <button onClick={props.decrement} className="ui button">
                {props.button2}
            </button>
        </div>
    );
};

const incrementCount = () => {
    count++;
    console.log(count);
};

const decrementCount = () => {
    count--;
    console.log(count);
};

// TODO:
// -should have "start" flip to "pause" if started, and back to "start" if unpaused

export default IncOrDec;