import React, { Component } from 'react';

class MaestroAdd1 extends Component {
    state = {
        id: Number,
        factura: "",
        fecha: "",
        option: ""
    }
    
    facturaRef = React.createRef()
    fechaRef = React.createRef()
    optionRef = React.createRef()

    componentDidMount() {
        if (this.props.maestro) {
            this.setState({
                id: this.props.maestro.id,
                option: this.props.maestro.option,
                factura: this.props.maestro.factura,
                fecha: this.props.maestro.fecha
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var add1;
        if (typeof this.state.id === 'string') {
            var id = Math.ceil(Math.random() * 123456789)
            add1 = {
                id,
                option: this.optionRef.current.value,
                factura: this.facturaRef.current.value,
                fecha: this.fechaRef.current.value
            }
        } else {
            add1 = {
                id: this.state.id,
                option: this.optionRef.current.value,
                factura: this.facturaRef.current.value,
                fecha: this.fechaRef.current.value
            }
        }
        this.props.add1(add1)
    }
    changeFactura = e => {
        this.setState({
            factura: e.target.value
        })
    }
    changeFecha = e => {
        this.setState({
            fecha: e.target.value
        })
    }
    changeOption = e => {
        this.setState({
            option: e.target.value
        })
    }
    render() { 
        return (  
            <div className="row justify-content-center">
                <select className="col-10" ref={this.optionRef} onChange={this.changeOption} value={this.state.option}>
                    <option value="undefined">undefined</option>
                    <option value="undefined1">undefined1</option>
                    <option value="undefined2">undefined2</option>
                    <option value="undefined3">undefined3</option>
                    <option value="undefined4">undefined4</option>
                </select>
                <p className="col-12">
                    ó si el Proveedor no está registrado,  <button><i className="fas fa-book"></i> Registrar</button>
                </p>
                <hr className="col-12" />
                <div className="col-12">
                    <form onSubmit={this.handleSubmit} className="row justify-content-center">
                        <input className="col-5" type="text" ref={this.facturaRef} onChange={this.changeFactura} placeholder="# de Factura" value={this.state.factura} required />
                        <input className="col-5" type="text" ref={this.fechaRef} onChange={this.changeFecha} placeholder="Fecha de Compra" value={this.state.fecha} required />
                        <div className="w-100"></div>
                        {
                            (this.state.factura && this.state.fecha) 
                                ?   <button type="submit" className="btn btn-success" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Siguiente</button>
                                :   <button type="submit" className="btn btn-danger">Siguiente</button>
                        }
                    </form>
                </div>
            </div>
        );
    }
}
 
export default MaestroAdd1;