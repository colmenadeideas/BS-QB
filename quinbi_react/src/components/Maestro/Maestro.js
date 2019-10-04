import React, { Component } from 'react';
import MaestroAdd from './MaestroAdd/MaestroAdd';
import MaestroVer from './MaestroVer/MaestroVer';
import MaestroEditar from './MaestroEditar/MaestroEditar';
import MaestroBody from './MaestroBody';

class Maestro extends Component {
    state = {  
        add: false,
        editar: false,
        ver: false,
        rows: [],
        editRow: [],
        verRow: []
    }
    addMaestro = () => {
        this.setState({
            add: true
        })
    }
    editarMaestro = (row) => {
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
    verMaestro = (row) => {
        if (!this.state.ver) {
            this.setState({
                verRow: row,
                ver: true
            })
        } else {
            this.setState({
                ver: false
            })
        }
    }
    closePopup = () => {    
        this.setState({
            add: false
        })
    }
    done = (maestro) => {
        if (maestro.length > 0) {
            var rows = [...this.state.rows, maestro]
            this.setState({
                add: false,
                rows
            })
        }
    }
    maestro = (maestro) => { 
        var row = this.state.rows.filter(row => (
            (row[0].id === maestro[0].id) ? row : ''
        ))
        var indice = this.state.rows.indexOf(row[0])
        var rows = this.state.rows
        rows[indice] = maestro
        this.setState({
            rows
        }, () => {
            this.editarMaestro()
        })
    }
    obtenerTabla = () => {

    }
    render() { 
        return (  
            <div className="row justify-content-center no-gutters maestro">
                <div className="card-maestro col-10">
                    <div className="card-header">
                        <div className="row">
                            <h2>Maestro</h2>
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
                                <MaestroBody 
                                    rows={this.state.rows}
                                    editRow={this.editarMaestro}
                                    verRow={this.verMaestro}
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
                {
                    (this.state.add) 
                        ?   <MaestroAdd 
                                closePopup={this.closePopup}
                                done={this.done}
                            />
                        :   ""
                }
                {
                    (this.state.editar) 
                        ?   <MaestroEditar 
                                row={this.state.editRow}
                                editarMaestro={this.editarMaestro}
                                maestro={this.maestro}
                            />
                        :   ""
                }
                {
                    (this.state.ver) 
                        ?   <MaestroVer 
                                row={this.state.verRow}
                                verMaestro={this.verMaestro}
                                closePopup={this.verMaestro}
                            />
                        :   ""
                }
            </div>
        );
    }
}
 
export default Maestro;