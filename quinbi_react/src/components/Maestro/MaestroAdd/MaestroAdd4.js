import React, { Component } from 'react';

class MaestroAdd2 extends Component {
    state = {
        compra2: "",
        precio2: "",
        exento2: "",
        numero2: ""
    }
    compraRef = React.createRef()
    precioRef = React.createRef()
    exentoRef = React.createRef()
    numeroRef = React.createRef()
    divRef = React.createRef()

    componentDidMount() {
        if (this.props.maestro) {
            this.setState({
                compra2: this.props.maestro.compra2,
                precio2: this.props.maestro.precio2,
                exento2: this.props.maestro.exento2,
                numero2: this.props.maestro.numero2
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var add4 = {
            compra2: this.compraRef.current.value,
            precio2: this.precioRef.current.value,
            exento2: this.exentoRef.current.value,
            numero2: this.numeroRef.current.value
        }
        this.props.add4(add4)
    }
    addCampo = () => {
        console.log('addCampo')
        var campo = `<input type="text" className="col-4"/><input type="text" className="col-4"/>`
        this.divRef.current.innerHTML = campo
    }
    changeCompra = e => {
        this.setState({
            compra2: e.target.value
        })
    }
    changePrecio = e => {
        this.setState({
            precio2: e.target.value
        })
    }
    changeExento = e => {
        this.setState({
            exento2: e.target.value
        })
    }
    changeNumero = e => {
        this.setState({
            numero2: e.target.value
        })
    }
    render() { 
        return (  
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={this.handleSubmit} className="row justify-content-center">
                        <input className="col-10 input1" type="text" ref={this.compraRef} placeholder="Concepto de la compra" onChange={this.changeCompra} value={this.state.compra2} required />
                        <input className="col-4" type="text" ref={this.precioRef} placeholder="Base Imponible Bs" onChange={this.changePrecio} value={this.state.precio2} required />
                        <input className="col-3" type="text" ref={this.exentoRef} placeholder="Exento" onChange={this.changeExento} value={this.state.exento2} required />
                        <input className="col-2" type="text" ref={this.numeroRef} placeholder="12" onChange={this.changeNumero} value={this.state.numero2} required />
                        <div id="campos" ref={this.divRef}></div>
                        <button className="btn add-campo" type="button" onClick={this.addCampo}><i className="fas fa-plus-circle"></i> Agregar Campos</button>
                        <div className="w-100"></div>
                        <button className="btn btn-warning espacio" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Regresar</button>
                        {
                            (this.state.compra2 && this.state.precio2 && this.state.exento2 && this.state.numero2) 
                                ?   <button type="submit" className="btn btn-success">Vista Previa</button>
                                :   <button type="submit" className="btn btn-danger">Vista Previa</button>
                        }
                    </form>
                </div>
            </div>
        );
    }
}
 
export default MaestroAdd2;