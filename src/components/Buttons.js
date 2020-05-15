import React from 'react';
import Work from './Work';
import Break from './Break';

class Buttons extends React.Component {
    render() {
        return (
            <div className='buttons'>
                <Work />
                <Break />
            </div>
        );
    }
}

export default Buttons;