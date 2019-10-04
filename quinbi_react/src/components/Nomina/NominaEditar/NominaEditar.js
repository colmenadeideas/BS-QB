import React, { Component } from 'react';
import NominaEditarCheck from './NominaEditarCheck';

class NominaEditar extends Component {
    state = {  }
    editarNomina = () => {
        this.props.editarNomina("true")
    }
    accept = (nomina) => {
        this.props.nomina(nomina)
    }
    render() { 
        return (  
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={this.editarNomina} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    <h2 className="col-12">EDITAR REGISTRO</h2>
                    <hr className="col-10" />
                    <div className="add col-8">
                        <NominaEditarCheck 
                            row={this.props.row}
                            accept={this.accept}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NominaEditar;