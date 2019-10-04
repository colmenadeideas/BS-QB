import React, { Component } from 'react';
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
        editRow: []
    }
    addMaestro = () => {
        this.setState({
            add: true
        })
    }
    done = (nomina) => {
        var rows = [...this.state.rows, nomina]
        this.setState({
            editRow: nomina,
            rows,
            add: false,
            ver: true
        })
    }
    closePopup = () => {
        this.setState({
            add: false,
            editar: false,
            ver: false
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
                                    <th>ID</th>
                                    <th>desde</th> 
                                    <th>hasta</th>
                                    <th>elaborada por</th>
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