import React, { Component } from 'react';

class CheckBox extends Component {
    render() {
        return (
            <div className="empleado">
        	    <input type="checkbox" id={this.props.id} value={this.props.value} onChange={this.props.onChange} />
                <div className="circular"></div>
                <label htmlFor={this.props.id}><h4>{this.props.value}</h4></label>
            </div>
        )
    }
}

export default CheckBox;
