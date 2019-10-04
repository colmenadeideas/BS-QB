import React, { Component } from 'react';
import MaestroAdd1 from './MaestroAdd1';
import MaestroAdd2 from './MaestroAdd2';
import MaestroAdd3 from './MaestroAdd3';
import MaestroAdd4 from './MaestroAdd4';
import MaestroAddCheck from './MaestroCheck';

class Maestroadd extends Component {
    state = {  
        add: true,
        addCheck: false,
        maestro: [
            {
                id: "",
                option: "",
                factura: "",
                fecha: ""
            },
            {
                compra: "",
                precio: "",
                exento: "",
                numero: ""
            },
            {
                compra1: "",
                precio1: "",
                exento1: "",
                numero1: ""
            },
            {
                compra2: "",
                precio2: "",
                exento2: "",
                numero2: ""
            }
        ]
    }
    add1 = (add) => {
        var maestro = this.state.maestro
        maestro[0] = add
        this.setState({
            maestro
        })
    }
    add2 = (add) => {
        var maestro = this.state.maestro
        maestro[1] = add
        this.setState({
            maestro
        })
    }
    add3 = (add) => {
        var maestro = this.state.maestro
        maestro[2] = add
        this.setState({
            maestro
        })
    }
    add4 = (add) => {
        var maestro = this.state.maestro
        maestro[3] = add
        this.setState({
            maestro,
            add: false,
            addCheck: true
        })
    }
    closePopup = () => {
        this.props.closePopup("true")
    }
    edit = () => {
        this.setState({
            add: true,
            addCheck: false
        })
    }
    accept = () => {
        this.setState({
            addCheck: false
        }, () => {
            this.props.done(this.state.maestro)
        })
    }
    render() { 
        return (  
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={this.closePopup} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    <h2 className="col-12">REGISTRAR</h2>
                    <hr className="col-10" />
                    <div className="add col-8">
                        {   
                            (this.state.add)
                                ?   <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-collapse" id="headingOne">
                                            <h2 className="mb-0">
                                                {
                                                    (typeof this.state.maestro[0].id === 'number')
                                                        ?   <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Base de Cálculo</button>
                                                        :   <button className="btn btn-link">Base de Cálculo</button>                                                    
                                                }
                                            </h2>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <MaestroAdd1 
                                                        add1={this.add1}
                                                        maestro={this.state.maestro[0]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-collapse" id="headingTwo">
                                            <h2 className="mb-0">
                                                {
                                                    (this.state.maestro[1].compra.length > 0)
                                                        ?   <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Formato Cargo</button>
                                                        :   <button className="btn btn-link collapsed">Formato Cargo</button>
                                                }
                                            </h2>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <MaestroAdd2 
                                                        add2={this.add2}
                                                        maestro={this.state.maestro[1]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-collapse" id="headingThree">
                                            <h2 className="mb-0">
                                                {
                                                    (this.state.maestro[2].compra1.length > 0)
                                                        ?   <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Bonos</button>
                                                        :   <button className="btn btn-link collapsed">Bonos</button>
                                                }
                                            </h2>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <MaestroAdd3 
                                                        add3={this.add3}
                                                        maestro={this.state.maestro[2]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-collapse" id="headingFour">
                                            <h2 className="mb-0">
                                                {
                                                    (this.state.maestro[3].compra2.length > 0)
                                                        ?   <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Otros Pagos</button>
                                                        :   <button className="btn btn-link collapsed">Otros Pagos</button>
                                                }
                                            </h2>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                <div className="card-body card-body-last">
                                                    <MaestroAdd4 
                                                        add4={this.add4}
                                                        maestro={this.state.maestro[3]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                :   ""
                        }
                        {
                            (this.state.addCheck)
                                ?   <MaestroAddCheck 
                                        maestro={this.state.maestro}
                                        edit= {this.edit}
                                        accept={this.accept}
                                    />
                                :   ""
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Maestroadd;