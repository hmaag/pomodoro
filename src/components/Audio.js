import React from 'react';

class Audio extends React.Component {

    state = {
        icon: 'volume up icon'
    }

    audioToggle = () => {
        if (this.props.audio === 'on') {
            this.props.setAudio('off');
            this.setState({
                icon: 'volume off icon'
            })
        } else {
            this.props.setAudio('on');
            this.setState({
                icon: 'volume up icon'
            })
        }
    }

    render() {
        return (
            <button className='ui icon button' onClick={this.audioToggle}> 
                <i className={this.state.icon}/>
            </button>
        )
    }
}

export default Audio;