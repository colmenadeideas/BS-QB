import React, { Component } from 'react';

class EmpleadoAddForm extends Component {
    state = { 
        id: "",
        cedula: "",
        nombre:"",
        apellido:"",
        fecha_ingreso:"",
        email: "",
    }

    cedulaRef = React.createRef()
    nombreRef = React.createRef()
    apellidoRef = React.createRef()
    fecha_ingresoRef = React.createRef()
    emailRef = React.createRef()

    readData = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        var save;
        save = {
            id: this.props.empleado.id,
            cedula: this.cedulaRef.current.value,
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value,
            fecha_ingreso: this.fecha_ingresoRef.current.value,
            email: this.emailRef.current.value,
        }
        this.props.accept("true")
        this.props.add(save)
    }

    componentDidMount() {
        
        if (this.props.empleado) {
            const { empleado } = this.props

            this.setState({
                id: empleado.id,
                cedula: empleado.cedula,
                nombre: empleado.nombre,
                apellido: empleado.apellido,
                fecha_ingreso: empleado.fecha_ingreso,
                email: empleado.email,
            })
        }
    }

    render() { 
        return ( 
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={this.handleSubmit} className="row justify-content-center">
                        <input className="col-5 align-self-start" type="text" name="cedula" ref={this.cedulaRef} onChange={this.readData} placeholder="N` cedula" value={this.state.cedula} required />
                        <div className="w-100"></div>
                        <input className="col-5" type="text" name="nombre" ref={this.nombreRef} onChange={this.readData} placeholder="Nombre" value={this.state.nombre} required />
                        <input className="col-6" type="text" name="apellido" ref={this.apellidoRef} onChange={this.readData} placeholder="Apellidos" value={this.state.apellido} required />
                        <input className="col-5" type="date" name="fecha_ingreso" ref={this.fecha_ingresoRef} onChange={this.readData} value={this.state.fecha_ingreso} required />
                        <input className="col-6" type="email" name="email" ref={this.emailRef} onChange={this.readData} placeholder="email" value={this.state.email} required />
                        <div className="w-100"></div>
                        {
                            (this.state.cedula && this.state.nombre && this.state.email) 
                                ?   <button type="submit" className="btn btn-success">Guardar</button>
                                :   <button type="submit" className="btn btn-danger disabled">Guardar</button>
                        }
                    </form>
                </div>
            </div>
         );
    }
}
 
export default EmpleadoAddForm;