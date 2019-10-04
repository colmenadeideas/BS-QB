import React, { Component } from 'react';

class MaestroAdd2 extends Component {
    state = {
        compra: "",
        precio: "",
        exento: "",
        numero: ""
    }
    compraRef = React.createRef()
    precioRef = React.createRef()
    exentoRef = React.createRef()
    numeroRef = React.createRef()

    componentDidMount() {
        if (this.props.maestro) {
            this.setState({
                compra: this.props.maestro.compra,
                precio: this.props.maestro.precio,
                exento: this.props.maestro.exento,
                numero: this.props.maestro.numero
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var add2 = {
            compra: this.compraRef.current.value,
            precio: this.precioRef.current.value,
            exento: this.exentoRef.current.value,
            numero: this.numeroRef.current.value
        }
        this.props.add2(add2)
        
    }
    changeCompra = e => {
        this.setState({
            compra: e.target.value
        })
    }
    changePrecio = e => {
        this.setState({
            precio: e.target.value
        })
    }
    changeExento = e => {
        this.setState({
            exento: e.target.value
        })
    }
    changeNumero = e => {
        this.setState({
            numero: e.target.value
        })
    }
    render() { 
        return (  
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={this.handleSubmit} className="row justify-content-center">
                        <input className="col-10 input1" type="text" ref={this.compraRef} placeholder="Concepto de la compra" onChange={this.changeCompra} value={this.state.compra} required />
                        <input className="col-4" type="text" ref={this.precioRef} placeholder="Base Imponible Bs" onChange={this.changePrecio} value={this.state.precio} required />
                        <input className="col-3" type="text" ref={this.exentoRef} placeholder="Exento" onChange={this.changeExento} value={this.state.exento} required />
                        <input className="col-2" type="text" ref={this.numeroRef} placeholder="12" onChange={this.changeNumero} value={this.state.numero} required />
                        <div className="w-100"></div>
                        <button className="btn btn-warning espacio" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Regresar</button>
                        {
                            (this.state.compra && this.state.precio && this.state.exento && this.state.numero) 
                                ?   <button type="submit" className="btn btn-success" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Siguiente</button>
                                :   <button type="submit" className="btn btn-danger">Siguiente</button>
                        }
                    </form>
                </div>
            </div>
        );
    }
}
 
export default MaestroAdd2;