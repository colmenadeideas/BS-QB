import React, { Component } from 'react';
import NominaAdd1 from './NominaAdd1';
import NominaAdd2 from './NominaAdd2';
import NominaAddCheck from './NominaAddCheck';

class NominaAdd extends Component {
    state = {  
        add: true,
        addCheck: false,
        preview: false,
        addNomina: {
            id: Number,
            dateFrom: "",
            dateTo: "",
            empleados: [],
            fecha: []
        }
    }
    add1 = (add) => {
        var dateF = add[0].toString().substr(4,11)
        var dateFrom = this.formatoFecha(dateF)
        var dateT = add[1].toString().substr(4,11)
        var dateTo = this.formatoFecha(dateT)
        var state = this.state.addNomina
        state = {
            id: Math.ceil(Math.random() * 123456789).toString(),
            dateFrom: dateFrom,
            dateTo: dateTo,
            fecha: add
        }
        this.setState({
            addNomina: state
        })
    }
    add2 = (add) => {
        var state = this.state.addNomina
        state.empleados = add
        this.setState({
            addNomina: state,
            add: false,
            addCheck: true
        })
    }
    formatoFecha = (fecha) => {
        var month = fecha.substr(0, 3)
        var day = fecha.substr(4, 2)
        var year = fecha.substr(7,4)
        switch (month) {
            case "Jan":
                month = 1
                break;
            case "Feb":
                month = 2
                break;
            case "Mar":
                month = 3
                break;
            case "Apr":
                month = 4
                break;
            case "May":
                month = 5
                break;
            case "Jun":
                month = 6
                break;
            case "Jul":
                month = 7
                break;
            case "Aug":
                month = 8
                break;
            case "Sep":
                month = 9
                break;
            case "Oct":
                month = 10
                break;
            case "Nov":
                month = 11
                break;
            default:
                month = 12
                break;
        }
        fecha = `${day}/${month}/${year}`
        return fecha
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
                                                        nomina={this.state.addNomina.empleados}
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