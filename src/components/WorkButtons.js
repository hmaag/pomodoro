import React from 'react';

class WorkButtons extends React.Component {

    render() {
        const style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        return (
            <div>
                <span style={style}> Session Length: {this.props.workLength} </span>
                <br />
                <div style={style}>
                    <button className='ui icon button' onClick={this.props.incrementWork}>
                        <i className='plus icon' />
                    </button>
                    <button className='ui icon button' onClick={this.props.decrementWork}>
                        <i className='minus icon' />
                    </button>
                </div>
            </div>
        )
    }
}

export default WorkButtons;