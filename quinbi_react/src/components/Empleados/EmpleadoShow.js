import React, {Component} from 'react';
import Editable from 'react-x-editable';
//import { Panel, Button, ButtonToolbar } from 'react-bootstrap';

class EmpleadoShow extends Component {
    state = { 
        empleado: {
            id: "",
            cedula: "",
            nombre:"",
            apellido:"",
            fecha_ingreso:"",
            email: "",
        },
        disabled: true
    }

    handleSubmit = target => {
        if (target && target.props) {

            const empleado = {
                id: this.state.empleado.id,
                [target.props.name]: target.value
            }
            this.props.editarEmpleado(empleado)

            this.setState({
                empleado: {
                    ...this.state.empleado,
                    [target.props.name]: target.value
                }
            });
        }
    }

    enabledInputs = () => {
        this.setState({
            disabled: false
        });
    }

    componentDidMount() {

        if (this.props.row) {
            const { row } = this.props

            this.setState({
                empleado: {
                    id: row.id,
                    cedula: row.cedula,
                    nombre: row.nombre,
                    apellido: row.apellido,
                    fecha_ingreso: row.fecha_ingreso,
                    email: row.email
                }
            })
        }
    }


    render() { 
        const { closePopup } = this.props
        const { disabled } = this.state
        const { cedula, nombre, apellido, fecha_ingreso, email } = this.state.empleado

        return ( 
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div className="close-icon">
                        <i className="fas fa-pencil-alt" onClick={() => this.enabledInputs()}></i>
                        {"  "}
                        <i className="fas fa-times" onClick={() => closePopup()} ></i>
                    </div>
                    <hr className="col-12" />
                    <h2 className="col-12 text-uppercase">VER Empleado</h2>
                    <hr className="col-10" />
                    <div className="col-10">

                        <div className="row">
                            <div className="col-5">
                                <img src="../img/profile.jpg" className="w-100" alt="Foto"/>
                            </div>
                            <div className="col-7 empleado-ficha">
                                <h4>
                                    {disabled ? nombre :
                                        <Editable
                                            name="nombre"
                                            dataType="text"
                                            mode={"inline"}
                                            title="Nombre"
                                            value={nombre}
                                            handleSubmit={this.handleSubmit}
                                            validate={(value) => {
                                                if(!value){
                                                    return 'Required';
                                                }
                                            }}
                                        />}
                                    {" "}
                                    {disabled ? apellido :
                                        <Editable
                                            name="apellido"
                                            dataType="text"
                                            mode={"inline"}
                                            title="Apellido"
                                            value={apellido}
                                            handleSubmit={this.handleSubmit}
                                            validate={(value) => {
                                                if(!value){
                                                    return 'Required';
                                                }
                                            }}
                                        />
                                    }
                                </h4>
                                <span>Ci: {" "}
                                    {disabled ? cedula :
                                        <Editable
                                            name="cedula"
                                            dataType="text"
                                            mode={"inline"}
                                            title="Cedula"
                                            value={cedula}
                                            disabled={disabled}
                                            handleSubmit={this.handleSubmit}
                                            validate={(value) => {
                                                if(!value){
                                                    return 'Required';
                                                }
                                            }}
                                        />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-left m-1 mt-4">
                                <div>Fecha de Ingreso: <small className="text-muted">
                                    {disabled ? fecha_ingreso :
                                        <Editable
                                            name="fecha_ingreso"
                                            dataType="date"
                                            mode={"inline"}
                                            title="Fecha de Ingreso"
                                            value={fecha_ingreso}
                                            disabled={disabled}
                                            handleSubmit={this.handleSubmit}
                                            validate={(value) => {
                                                if(!value){
                                                    return 'Required';
                                                }
                                            }}
                                        />
                                    }
                                </small></div>
                            </div>
                            <div className="col-12 text-left m-1"> 
                                <div>Correo Electronico: <small className="text-muted">
                                    {disabled ? email :
                                        <Editable
                                            name="email"
                                            dataType="text"
                                            mode={"inline"}
                                            title="Correo Electronico"
                                            value={email}
                                            disabled={disabled}
                                            handleSubmit={this.handleSubmit}
                                            validate={(value) => {
                                                if(!value){
                                                    return 'Required';
                                                }
                                            }}
                                        />
                                    }
                                </small></div>
                            </div>
                        </div>
                        <div className="row">
                            <hr className="col-12"/>
                            <h3 className="m-auto">Informacion</h3>
                            <hr className="col-12"/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem id impedit et! Incidunt unde 
                                modi at quis aliquid voluptates odit eaque asperiores magnam beatae, ad, eligendi numquam 
                                mollitia et sunt consequuntur quasi dolorum iste blanditiis earum. Nemo soluta deleniti tempore 
                                animi. Consequuntur a amet numquam, adipisci harum dicta autem quia et cumque fugiat labore 
                                voluptatum laudantium voluptatem eum repellendus veniam.
                            </p>
                        </div>
                        {/* <button className="btn edit-button" onClick={this.editClick}><i className="fas fa-pencil-alt"></i> Editar</button> */}
                        <button className="btn done-button mb-3" onClick={() => closePopup()}><i className="fas fa-check"></i> Aceptar</button>    
                    </div>
                </div>
            </div>
        );
    }
}
 
export default EmpleadoShow;