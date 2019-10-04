import React, { Component } from 'react';
import MaestroCheck1 from '../MaestroAdd/MaestroCheck1';

class MaestroVerCheck extends Component {
    acceptClick = () => {
        this.props.accept("true")
    }
    render() { 
        return (  
            <React.Fragment>
                {
                    this.props.row.map((value, index) => (
                        <MaestroCheck1 
                            maestro={value}
                            key={index}
                        />
                    ))
                }
                <button className="btn done-button" onClick={this.acceptClick}><i className="fas fa-check"></i> Aceptar</button>
            </React.Fragment>
        );
    }
}
 
export default MaestroVerCheck;