import React, { Component } from 'react';

class MaestroRow extends Component {
    state = {  }
    editarMaestro = () => {
        this.props.edit(this.props.row)
    }
    verMaestro = () => {
        this.props.ver(this.props.row)
    }
    render() { 
        return (  
            <React.Fragment>
                <td>{this.props.row[0].id}</td>
                <td>01/02/2018</td> 
                <td>15/02/2018</td>                                    
                <td><span className="autor">Delia E. Lárez</span></td> 
                <td>
                    <button onClick={this.editarMaestro} className="btn editar"><i className="fas fa-pencil-alt"></i> editar</button>
                    <button onClick={this.verMaestro} className="btn ver"><i className="fas fa-search"></i> ver</button>
                </td>  
            </React.Fragment>
        );
    }
}
 
export default MaestroRow;