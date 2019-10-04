import React, { Component } from 'react';

class NominaCheck extends Component {
    state = {  }
    editClick = () => {
        this.props.edit("true")
    }
    acceptClick = () => {
        this.props.accept("true")
    }
    render() { 
        const { dateFrom, dateTo, empleados } = this.props.addNomina
        return (  
            <React.Fragment>
                <p><strong>Desde:</strong> {dateFrom}</p>
                <p><strong>Hasta:</strong> {dateTo}</p>
                <p><strong>Empleados:</strong></p>
                <ul className="lista">
                    {
                        empleados.map((empleado, key) => (
                            <li key={key}>{empleado}</li>
                        ))
                    }
                </ul>
                <button className="btn edit-button" onClick={this.editClick}><i className="fas fa-pencil-alt"></i> Editar</button>
                <button className="btn done-button" onClick={this.acceptClick}><i className="fas fa-check"></i> Aceptar</button>
            </React.Fragment>
        );
    }
}
 
export default NominaCheck;