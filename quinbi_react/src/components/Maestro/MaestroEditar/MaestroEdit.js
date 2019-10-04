import React, { Component } from 'react';
import MaestroAdd1 from '../MaestroAdd/MaestroAdd1';
import MaestroAdd2 from '../MaestroAdd/MaestroAdd2';
import MaestroAdd3 from '../MaestroAdd/MaestroAdd3';
import MaestroAdd4 from '../MaestroAdd/MaestroAdd4';

class MaestroEdit extends Component {
    state = {  
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
        var maestro = this.props.maestro
        maestro[0] = add
        maestro[0].id = this.props.maestro[0].id
        this.setState({
            maestro
        })
    }
    add2 = (add) => {
        var maestro = this.props.maestro
        maestro[1] = add
        this.setState({
            maestro
        })
    }
    add3 = (add) => {
        var maestro = this.props.maestro
        maestro[2] = add
        this.setState({
            maestro
        })
    }
    add4 = (add) => {
        var maestro = this.props.maestro
        maestro[3] = add
        this.props.edit(maestro)
    }
    // add4 = (add) => {
    //     var maestro = this.props.maestro
    //     if (maestro[1] === null) {
    //         maestro[1] = this.state.add2
    //     } else if (maestro[3] === null) {
    //         maestro[2] = this.state.add3
    //     }
    //     maestro[3] = add
    //     if (Object.keys(add).length > 0 || Object.keys(add1).length > 0 || Object.keys(add2).length > 0 || Object.keys(add3).length > 0) {
    //         let maestro = [add1, add2, add3, add]
    //         this.props.edit(maestro)
    //     }
    // }
    render() { 
        return (  
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-collapse" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Base de Cálculo
                        </button>
                    </h2>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <MaestroAdd1 
                                add1={this.add1}
                                maestro={this.props.maestro[0]}
                            />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-collapse" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Formato Cargo
                        </button>
                    </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            <MaestroAdd2 
                                add2={this.add2}
                                maestro={this.props.maestro[1]}
                            />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-collapse" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Bonos
                        </button>
                    </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            <MaestroAdd3 
                                add3={this.add3}
                                maestro={this.props.maestro[2]}
                            />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-collapse" id="headingFour">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Otros campos
                        </button>
                    </h2>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div className="card-body card-body-last">
                            <MaestroAdd4 
                                add4={this.add4}
                                maestro={this.props.maestro[3]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MaestroEdit;