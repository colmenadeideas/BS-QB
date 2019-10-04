import React, { Component } from 'react';
import MaestroEditarCheck from './MaestroEditarCheck';

class MaestroEditar extends Component {
    state = {  }
    editarMaestro = () => {
        this.props.editarMaestro("true")
    }
    accept = (maestro) => {
        this.props.maestro(maestro)
    }
    render() { 
        return (  
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={this.editarMaestro} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    <h2 className="col-12">EDITAR REGISTRO</h2>
                    <hr className="col-10" />
                    <div className="add col-8">
                        <MaestroEditarCheck 
                            row={this.props.row}
                            accept={this.accept}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MaestroEditar;