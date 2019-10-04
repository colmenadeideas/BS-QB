import React, { Component } from 'react';

class MaestroAdd2 extends Component {
    state = {
        compra1: "",
        precio1: "",
        exento1: "",
        numero1: ""
    }
    compraRef = React.createRef()
    precioRef = React.createRef()
    exentoRef = React.createRef()
    numeroRef = React.createRef()

    componentDidMount() {
        if (this.props.maestro) {
            this.setState({
                compra1: this.props.maestro.compra1,
                precio1: this.props.maestro.precio1,
                exento1: this.props.maestro.exento1,
                numero1: this.props.maestro.numero1
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var add3 = {
            compra1: this.compraRef.current.value,
            precio1: this.precioRef.current.value,
            exento1: this.exentoRef.current.value,
            numero1: this.numeroRef.current.value
        }
        this.props.add3(add3)
    }
    changeCompra = e => {
        this.setState({
            compra1: e.target.value
        })
    }
    changePrecio = e => {
        this.setState({
            precio1: e.target.value
        })
    }
    changeExento = e => {
        this.setState({
            exento1: e.target.value
        })
    }
    changeNumero = e => {
        this.setState({
            numero1: e.target.value
        })
    }
    render() { 
        return (  
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={this.handleSubmit} className="row justify-content-center">
                        <input className="col-10 input1" type="text" ref={this.compraRef} placeholder="Concepto de la compra" onChange={this.changeCompra} value={this.state.compra1} required />
                        <input className="col-4" type="text" ref={this.precioRef} placeholder="Base Imponible Bs" onChange={this.changePrecio} value={this.state.precio1} required />
                        <input className="col-3" type="text" ref={this.exentoRef} placeholder="Exento" onChange={this.changeExento} value={this.state.exento1} required />
                        <input className="col-2" type="text" ref={this.numeroRef} placeholder="12" onChange={this.changeNumero} value={this.state.numero1} required />
                        <div className="w-100"></div>
                        <button className="btn btn-warning espacio" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Regresar</button>
                        {
                            (this.state.compra1 && this.state.precio1 && this.state.exento1 && this.state.numero1) 
                                ?   <button type="submit" className="btn btn-success" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Siguiente</button>
                                :   <button type="submit" className="btn btn-danger">Siguiente</button>
                        }
                    </form>
                </div>
            </div>
        );
    }
}
 
export default MaestroAdd2;