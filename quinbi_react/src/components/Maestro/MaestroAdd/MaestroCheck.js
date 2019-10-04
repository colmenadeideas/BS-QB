import React, { Component } from 'react';
import MaestroCheck1 from './MaestroCheck1';

class MaestroCheck extends Component {
    editClick = () => {
        this.props.edit("true")
    }
    acceptClick = () => {
        this.props.accept("true")
    }
    render() { 
        return (  
            <div>
                {
                    this.props.maestro.map((value, index) => (
                        <MaestroCheck1 
                            maestro={value}
                            key={index}
                        />
                    ))
                }
                <button className="btn edit-button" onClick={this.editClick}><i className="fas fa-pencil-alt"></i> Editar</button>
                <button className="btn done-button" onClick={this.acceptClick}><i className="fas fa-check"></i> Aceptar</button>
            </div>
        );
    }
}
 
export default MaestroCheck;