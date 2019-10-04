import React, { Component } from 'react';
import EmpleadoForm from './EmpleadoForm';

class EmpleadoAdd extends Component {
    state = { 
        add: true,
        addCheck: false,
        empleado: {
            cedula: "",
            nombre:"",
            apellido:"",
            fecha_ingreso:"",
            email: "",
        }

    }

    add = (add) => {
        const empleado = add
        this.setState({
            empleado,
            add: false,
            addCheck: true,
        })
        
    }

    closePopup = () => {
        this.props.closePopup('true')
    }
    
    accept = () => {
        this.setState({
            addCheck: false
        }, () => {
            this.props.done(this.state.empleado)
        })
    }

    render() { 
        return (  
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={this.closePopup} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    <h2 className="col-12">Agregar Empleado</h2>
                    <hr className="col-10" />
                    <div className="add col-10">
                        {   
                            (this.state.add)  ?
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-collapse" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Datos Personales</button>
                                        </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <EmpleadoForm 
                                                    add={this.add}
                                                    empleado={this.state.empleado}
                                                    accept={this.accept}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            : <div></div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default EmpleadoAdd;