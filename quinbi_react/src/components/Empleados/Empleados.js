import React, { Component } from 'react';
import axios from 'axios';

import Empleado from './Empleado';
import EmpleadoAdd from './EmpleadoAdd';
import EmpleadoShow from './EmpleadoShow';

class Empleados extends Component {
    state = {  
        add: false,
        editar: false,
        ver: false,
        rows: [],
        editRow: [],
        verRow: []
    }

    addEmpleado = () => {
        this.setState({
            add: true
        })
    }
    
    verEmpleado = (row) => {
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
    
    editarEmpleado = (empleado) => { 
        if (empleado && empleado !== "true") {
            let row = ''
            this.state.rows.filter(emp => (
                (emp.id === empleado.id) ? row = empleado : ''//JSON.stringify(empleado) : ''        
            ))

            let url = `http://localhost/BS-QB/quinbi_php/html/api/employee/update`//+encodeURIComponent(row)

            axios.post(url, {row})
                .then(res => {
                    console.log(res)
                    if (res.data === 1) {
                        let indice = 0
                        var rows = [...this.state.rows]
                        rows.map((emp, i) => (
                            emp.id === row.id ? indice = i : console.log("nada")
                        ))
                        let edited = rows[indice]
                        let keys = Object.keys(row)
                        keys.map(value => (
                            edited[value] = row[value]
                        ))
                        rows[indice] = edited
                        
                        this.setState({
                            rows
                        }, () => {
                            this.editarEmpleado()
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
        
    done = (empleado) => {
        let row = empleado
        let url = `http://localhost/BS-QB/quinbi_php/html/api/employee/insert`
        axios.post(url, {row})
        .then(res => {
            if (res.data === 1) {
                var rows = [...this.state.rows, empleado]
                this.setState({
                    add: false,
                    rows
                })
            }
        })
    }
        
    closePopup = () => {
        this.setState({
            add: false
        })
    }
    
    componentDidMount() {
        let url = `http://localhost/BS-QB/quinbi_php/html/api/getEmployees/`
        axios.get(url)
            .then(res => {
                this.setState({ 
                    rows: res.data
                }); 
                //console.log(this.state.rows);
            })
    }

    render() { 
        //console.log(this.state.rows);
        return (  
            <div className="row justify-content-center no-gutters empleado">
                <div className="card-empleado col-10">
                    <div className="card-header">
                        <div className="row">
                            <h2>Empleados</h2>
                            <div onClick={this.addEmpleado} className="ml-auto"><i className="fas fa-plus"></i></div>
                        </div>
                    </div>
                    <div className="card-table">
                    <table>
                            <thead>
                                <tr>
                                    <th>Cedula</th> 
                                    <th>Nombre y Apellido</th>
                                    <th>Fecha de Ingreso</th>
                                    <th>Correo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <Empleado
                                        rows={this.state.rows}
                                        verEmpleado={this.verEmpleado}
                                    /> 
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {
                    (this.state.add) 
                        ?   <EmpleadoAdd 
                                closePopup={this.closePopup}
                                done={this.done}
                            />
                        :   ""
                }
                {
                    (this.state.ver) 
                        ?   <EmpleadoShow 
                                row={this.state.verRow}
                                editarEmpleado={this.editarEmpleado}
                                closePopup={this.verEmpleado}
                            />
                        :   ""
                }
            </div>
        );
    }
}
 
export default Empleados;