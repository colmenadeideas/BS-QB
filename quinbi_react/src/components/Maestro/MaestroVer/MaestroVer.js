import React, { Component } from 'react';
import MaestroVerCheck from './MaestroVerCheck';

class MaestroVer extends Component {
    state = {  }
    accept = () => {
        this.props.verMaestro("true")
    }
    
    render() { 
        return (  
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={this.accept} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    <h2 className="col-12">VER REGISTRO</h2>
                    <hr className="col-10" />
                    <div className="add col-8">
                        <MaestroVerCheck 
                            row={this.props.row}
                            accept={this.accept}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MaestroVer;