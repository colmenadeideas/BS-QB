import React, { Component } from 'react';
import NominaAdd1 from './NominaAdd1';
import NominaAdd2 from './NominaAdd2';
import NominaAddCheck from './NominaAddCheck';
import { formatoFecha } from '../formatoFecha'

class NominaAdd extends Component {
    state = {  
        add: true,
        addCheck: false,
        preview: false,
        listEmpleados: [],
        addNomina: {
            numero: Number,
            fecha_desde: "",
            fecha_hasta: "",
            empleados: [{
                id: Number,
                name: ""
            }],
            fecha: []
        }
    }
    add1 = (add) => {
        console.log(add);
        var dateF = add[0].toString().substr(4,11)
        var dateT = add[1].toString().substr(4,11)
        var dateFrom = formatoFecha(dateF)
        var dateTo = formatoFecha(dateT)
        var state = this.state.addNomina
        var f = new Date();
        f = f.getDate().toString().padStart(2, '0')+"-"+f.getMonth().toString().padStart(2, '0')+"-"+f.getFullYear()+ " " + //fecha
            f.getHours().toString().padStart(2, '0')+":"+f.getMinutes().toString().padStart(2, '0')+":"+f.getSeconds().toString().padStart(2, '0'); //hora
        console.log(f);
        state = {
            numero: Math.ceil(Math.random() * 123456789).toString(),
            fecha_desde: dateFrom,
            fecha_hasta: dateTo,
            fecha: f
        }
        this.setState({
            addNomina: state
        })
        console.log(state);
    }
    add2 = (add) => {
        console.log(add);
        var state = this.state.addNomina
        state.empleados = add
        this.setState({
            addNomina: state,
            add: false,
            addCheck: true
        })
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
            this.props.done(this.state.addNomina)
        })
    }
    closePopup = () => {
        this.props.closePopup("true")
    }

    componentDidMount() {
        this.setState({
            listEmpleados: this.props.empleados
        });
    }
    render() { 
        return (  
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={this.closePopup} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    <h2 className="col-12">REGISTRAR</h2>
                    <hr className="col-10" />
                    <div className="add col-10">
                        {   
                            (this.state.add)
                                ?   <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-collapse" id="headingOne">
                                            <h2 className="mb-0">
                                                {
                                                    (this.state.addNomina.fecha.length > 0)
                                                        ?   <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Definir Periodo</button>
                                                        :   <button className="btn btn-link">Definir Periodo</button>
                                                }
                                            </h2>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <NominaAdd1 
                                                        add1={this.add1}
                                                        nomina={this.state.addNomina.fecha}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-collapse" id="headingTwo">
                                            <h2 className="mb-0">
                                                {
                                                    (this.state.addNomina.empleados !== undefined)
                                                        ?   <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Seleccionar Empleados</button>
                                                        :   <button className="btn btn-link">Seleccionar Empleados</button>
                                                }
                                            </h2>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body card-ultimo">
                                                    <NominaAdd2 
                                                        add2={this.add2}
                                                        nomina={this.state.listEmpleados}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                :   ""
                        }
                        {
                            (this.state.addCheck)
                                ?   <NominaAddCheck 
                                        addNomina={this.state.addNomina}
                                        edit={this.edit}
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
 
export default NominaAdd;