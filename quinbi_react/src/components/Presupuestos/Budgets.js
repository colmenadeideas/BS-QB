import React, { Component } from 'react';
import axios from 'axios';

import Budget from './Budget'
import BudgetAdd from './BudgetAdd'

class Budgets extends Component {
    state = { 
        add: false,
        rows: [],
        clients: []
    }


    budgetPopup = (e, action) => {
        this.setState({ add: action });
    }

    componentDidMount() {
        let url = `http://localhost/BS-QB/quinbi_php/html/api/getAll/all/presupuesto`
        axios.get(url)
            .then(res => {
                this.setState({ 
                    rows: res.data
                }); 
                console.log(res.data);
            })

        url = `http://localhost/BS-QB/quinbi_php/html/api/getAll/all/cliente`
        axios.get(url)
            .then(res => {
                this.setState({ 
                    clients: res.data
                }); 
                console.log(res.data);
            })

    }

    render() { 
        return ( 
            <div className="row justify-content-center no-gutters empleado">
                <div className="card-empleado col-10">
                    <div className="card-header">
                        <div className="row">
                            <h2>Presupuestos</h2>
                            <div onClick={(e) => this.budgetPopup(e, "true")} className="ml-auto"><i className="fas fa-plus"></i></div>
                        </div>
                    </div>
                    <div className="card-table">
                    <table>
                            <thead>
                                <tr>
                                    <th>#</th> 
                                    <th>Titulo</th>
                                    <th>Cliente</th>
                                    <th>Fecha</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <Budget 
                                        rows={this.state.rows}
                                    />    
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {
                    (this.state.add)
                    ?   <BudgetAdd
                            budgetPopup={this.budgetPopup}
                            clients={this.state.clients}
                        />
                    :   ""
                }
            </div>
        );
    }
}
 
export default Budgets;