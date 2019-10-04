import React, { Component } from 'react';
import NominaAdd1 from '../NominaAdd/NominaAdd1';
import NominaAdd2 from '../NominaAdd/NominaAdd2';

class NominaAdd extends Component {
    state = {  
        addNomina: {
            id: "",
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
        state.id = this.props.nomina.id
        state.dateFrom = dateFrom
        state.dateTo = dateTo
        state.fecha = add
        this.setState({
            addNomina: state
        })
    }
    add2 = (add) => {
        var state = this.state.addNomina
        state.empleados = add
        this.setState({
            addNomina: state
        })
        this.props.edit(state)
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
    render() { 
        return (  
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-collapse" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Definir Periodo
                        </button>
                    </h2>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <NominaAdd1 
                                add1={this.add1}
                                nomina={this.props.nomina.fecha}
                            />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-collapse" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Seleccionar Empleados
                        </button>
                    </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body card-ultimo">
                            <NominaAdd2 
                                add2={this.add2}
                                nomina={this.props.nomina.empleados}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NominaAdd;