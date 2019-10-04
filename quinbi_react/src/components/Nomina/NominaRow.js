import React, { Component } from 'react';

class NominaRow extends Component {
    editarNomina = () => {
        this.props.edit(this.props.row)
    }
    verNomina = () => {
        this.props.ver(this.props.row)
    }
    render() { 
        const { id, dateFrom, dateTo } = this.props.row
        return (  
            <React.Fragment>
                <td>{id}</td>
                <td>{dateFrom}</td> 
                <td>{dateTo}</td>                                    
                <td><span className="autor">Delia E. Lárez</span></td> 
                <td>
                    <button onClick={this.editarNomina} className="btn editar"><i className="fas fa-pencil-alt"></i> editar</button>
                    <button onClick={this.verNomina} className="btn ver"><i className="fas fa-search"></i> ver</button>
                </td>  
            </React.Fragment>
        );
    }
}
 
export default NominaRow;