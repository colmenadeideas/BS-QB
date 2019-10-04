import React, { Component } from 'react';
import EmpleadoForm from './EmpleadoForm';

class EmpleadoEdit extends Component {
     state = { 
        empleado: {
            id: "",
            cedula: "",
            nombre:"",
            apellido:"",
            fecha_ingreso:"",
            email: "",
        }
        
    }
    add = (data) => {
        /* let empleado = this.props.row
        console.log(empleado); */
        const empleado = data
        this.props.empleado(empleado)
        //console.log(empleado);
        this.setState({ 
            empleado : {
                id: empleado.id,
                cedula : empleado.cedula,
                nombre: empleado.nombre,
                apellido: empleado.apellido,
                fecha_ingreso : empleado.fecha_ingreso,
                email : empleado.email,
            } 
        }); 
        /* VA ES ESTE como no estan todos los campos esta de forma temporal el anterior
        this.setState({
            empleado,
        })   */
        //console.log(this.state.empleado);
    }

    editarEmpleado = () => {
        this.props.editarEmpleado("true")
    }

    accept = (empleado) => {
        this.props.empleado(empleado)
    } 
     

     render() { 
        return (  
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={this.editarEmpleado} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    <h2 className="col-12 text-uppercase">Editar Empleado</h2>
                    <hr className="col-10" />
                    <div className="add col-10">

                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-collapse" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Datos Personales</button>                                </h2>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <EmpleadoForm
                                            add={this.add}
                                            empleado={this.props.row}
                                            accept={this.accept}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default EmpleadoEdit;