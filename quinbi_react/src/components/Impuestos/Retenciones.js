import React, { Component } from 'react';


class Retenciones extends Component {

    state = { 


    }

    render() { 
        return ( 
            <div className="row justify-content-center no-gutters maestro">
                <div className="card-maestro col-10">
                    <div className="card-header">
                        <div className="row">
                            <h2>Retenciones</h2>
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
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Retenciones;