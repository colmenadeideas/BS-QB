import React, { Component } from 'react';
import axios from 'axios';

import NominaAdd from './NominaAdd/NominaAdd';
import NominaBody from './NominaBody';
import NominaEditar from './NominaEditar/NominaEditar';
import NominaPreview from './NominaVer/NominaPreview';

class Nomina extends Component {
    state = {  
        add: false,
        editar: false,
        ver: false,
        rows: [],
        editRow: [],
        empleados: []
    }
    addMaestro = () => {
        this.setState({
            add: true
        })
    }
    done = (nomina) => {
        console.log(nomina);
        let row = nomina;
        let url = `http://localhost/BS-QB/quinbi_php/html/api/insert/egresos_nomina`
        axios.post(url, {row})
        .then(res => {
            console.log(res);
            //if (res.data === 1) { //comentado de forma temporal hasta que se haga la logica en el backend
                var rows = [...this.state.rows, nomina]
                this.setState({
                    editRow: nomina,
                    rows,
                    add: false,
                    ver: true
                })
            //}
        })
    }
    editarNomina = (row) => {
        if (!this.state.editar) {
            this.setState({
                editRow: row,
                editar: true
            })
        } else {
            this.setState({
                editar: false
            })
        }
    }
    verNomina = (row) => {
        if (!this.state.ver) {
            this.setState({
                editRow: row,
                editar: false,
                ver: true
            })
        } else {
            this.setState({
                ver: false
            })
        }
    }
    nomina = (nomina) => {
        var row = this.state.rows.filter(row => (
            (row.id === nomina.id) ? row : ''
            ))
            var indice = this.state.rows.indexOf(row[0])
            var rows = this.state.rows
            rows[indice] = nomina
            this.setState({
                rows
            }, () => {
                this.verNomina(nomina)
            })
    }
    closePopup = () => {
        this.setState({
            add: false,
            editar: false,
            ver: false
        })
    }

    componentDidMount() {
        let url = `http://localhost/BS-QB/quinbi_php/html/api/getAll/all/egresos_nomina`
        axios.get(url)
            .then(res => {
                this.setState({
                    rows: res.data
                });
            })

        url = `http://localhost/BS-QB/quinbi_php/html/api/getEmployees/`
        axios.get(url)
            .then(res => {
                this.setState({
                    empleados: res.data
                });
            })
    }

    render() { 
        return (  
            <div className="row justify-content-center no-gutters maestro">
                <div className="card-maestro col-10">
                    <div className="card-header">
                        <div className="row">
                            <h2>Nomina</h2>
                            <div onClick={this.addMaestro} className="ml-auto"><i className="fas fa-plus"></i></div>
                        </div>
                    </div>
                    <div className="card-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>desde</th> 
                                    <th>hasta</th>
                                    <th>Creacion</th>
                                    <th>Elaborada por</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <NominaBody 
                                    rows={this.state.rows}
                                    editRow={this.editarNomina}
                                    verRow={this.verNomina}
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
                {
                    (this.state.add) 
                        ?   <NominaAdd 
                                closePopup={this.closePopup}
                                done={this.done}
                                empleados={this.state.empleados}
                            />
                        :   ""
                }
                {
                    (this.state.editar) 
                        ?   <NominaEditar 
                                row={this.state.editRow}
                                editarNomina={this.editarNomina}
                                nomina={this.nomina}
                            />
                        :   ""
                }
                {
                    (this.state.ver) 
                        ?   <NominaPreview 
                                nomina={this.state.editRow}
                                closePopup={this.closePopup}
                            />
                        :   ""
                }
            </div>
        );
    }
}
 
export default Nomina;