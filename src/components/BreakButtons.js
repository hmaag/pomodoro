import React from 'react';

class BreakButtons extends React.Component {

    render() {
        const style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        return (
            <div>
                <span style={style}> Break Length: {this.props.breakLength} </span>
                <br />
                <div style={style}>
                    <button className='ui icon button' onClick={this.props.incrementBreak}>
                        <i className='plus icon' />
                    </button>
                    <button className='ui icon button' onClick={this.props.decrementBreak}>
                        <i className='minus icon' />
                    </button>
                </div>
            </div>
        )
    }
}

export default BreakButtons;