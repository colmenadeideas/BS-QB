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
        const { fecha_desde, fecha_hasta, empleados } = this.props.addNomina
        console.log(empleados);
        return (  
            <React.Fragment>
                <p><strong>Desde:</strong> {fecha_desde}</p>
                <p><strong>Hasta:</strong> {fecha_hasta}</p>
                <p><strong>Empleados:</strong></p>
                <ul className="lista">
                    {
                        empleados.map((empleado, key) => (
                            <li key={key} className="row">
                                <span className="col-4">{empleado.name}</span> 
                                <span className="col-4">Dias Extras: {empleado.dias_extras}</span> 
                                <span className="col-4">Ausencias: {empleado.ausencias}</span>
                            </li>
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