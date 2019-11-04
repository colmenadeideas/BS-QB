import React, { Component } from 'react';

import BudgetForm1 from './BudgetForm1';
import BudgetForm2 from './BudgetForm2';

class BudgetAdd extends Component {
    state = { 
        add: true,
        addBudget: {
            datos_personales: "",
            clausulas_presupuestos: "",
        }
    }

    budgetPopup = (e, action) => {
        this.props.budgetPopup(action)
    }

    budget1 = (datos_personales) => {
        this.setState({
            addBubget: {
                datos_personales
            },
        })
    }

    render() { 
        const { clients } = this.props
        return ( 
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={(e) => this.budgetPopup(e, "false")} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    <h2 className="col-12">Agregar Presupuesto</h2>
                    <hr className="col-10" />
                    <div className="add col-10">
                        
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-collapse" id="headingOne">
                                <h2 className="mb-0">
                                    {
                                        (this.state.addBudget.datos_personales !== "")
                                        ?   <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Datos Personales</button>
                                        :   <button className="btn btn-link">Datos Personales</button>
                                    }
                                </h2>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <BudgetForm1 
                                            clients={clients}
                                            budget1={this.budget1}
                                        /> 
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-collapse" id="headingTwo">
                                <h2 className="mb-0">
                                    {
                                        (this.state.addBudget.datos_personales !== "")
                                            ?   <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Clausulas del presupuesto</button>
                                            :   <button className="btn btn-link">Clausulas del presupuesto</button>
                                    }
                                </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <BudgetForm2

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-collapse" id="headingThree">
                                <h2 className="mb-0">
                                    {
                                        (this.state.addBudget.clausulas_presupuestos !== "")
                                            ?   <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Tiempo de Entrega y Forma de Pago</button>
                                            :   <button className="btn btn-link">Tiempo de Entrega y Forma de Pago</button>
                                    }
                                </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body card-ultimo">
                                        <BudgetForm2
                                        
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default BudgetAdd;