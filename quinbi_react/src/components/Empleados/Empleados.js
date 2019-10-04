import React, { Component } from 'react';
import axios from 'axios';

import EmpleadoAdd from './EmpleadoAdd';
import EmpleadoEdit from './EmpleadoEdit';
import EmpleadoShow from './EmpleadoShow';
import EmpleadosList from './EmpleadosList';

class Empleados extends Component {
    state = {  
        add: false,
        editar: false,
        ver: false,
        rows: [],
        editRow: [],
        verRow: []
    }

    componentDidMount() {
        let url = `http://localhost/quinbi_php/html/api/getEmployees/`
        axios.get(url)
            .then(res => {
                this.setState({ 
                    rows: res.data
                }); 
                //console.log(this.state.rows);
            })
    }

    addEmpleado = () => {
        this.setState({
            add: true
        })
    }
    editarEmpleado = (row) => {
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

    empleado = (empleado) => { 
        if (empleado && empleado !== "true") {
            let row = ''
            this.state.rows.filter(emp => (
                (emp.id === empleado.id) ? row = empleado : ''//JSON.stringify(empleado) : ''        
            ))
            var indice = row.id
            let url = `http://localhost/quinbi_php/html/api/employee/update`//+encodeURIComponent(row)
            console.log(row)
            //console.log(url);

            axios.post(url, {row})
                .then(res => {
                    console.log(res)
                    if (res.data === 1) {
                        var rows = [...this.state.rows]
                        rows[indice] = row
                        this.setState({
                            rows
                        }, () => {
                            this.editarEmpleado()
                        })
                        console.log(this.state.rows)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    done = (empleado) => {
        let row = empleado
        let url = `http://localhost/quinbi_php/html/api/employee/insert`
        console.log(url);
        axios.post(url, {row})
            .then(res => {
                if (res.data === 1) {
                    var rows = [...this.state.rows, empleado]
                    this.setState({
                        add: false,
                        rows
                    })
                }
                console.log(res);
                console.log(this.state.rows);
            })

    }

    closePopup = () => {
        this.setState({
            add: false
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
                                    <th>ID</th>
                                    <th>Cedula</th> 
                                    <th>Nombre y Apellido</th>
                                    <th>Fecha de Ingreso</th>
                                    <th>Correo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <EmpleadosList
                                        rows={this.state.rows}
                                        editarEmpleado={this.editarEmpleado}
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
                    (this.state.editar) 
                        ?   <EmpleadoEdit 
                                row={this.state.editRow}
                                editarEmpleado={this.editarEmpleado}
                                empleado={this.empleado}
                            />
                        :   ""
                }
                {
                    (this.state.ver) 
                        ?   <EmpleadoShow 
                                row={this.state.verRow}
                                verEmpleado={this.verEmpleado}
                                closePopup={this.verEmpleado}
                            />
                        :   ""
                }
            </div>
        );
    }
}
 
export default Empleados;