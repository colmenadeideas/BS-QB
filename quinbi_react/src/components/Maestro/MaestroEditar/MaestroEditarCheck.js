import React, { Component } from 'react';
import MaestroCheck1 from '../MaestroAdd/MaestroCheck1';
import MaestroEdit from './MaestroEdit';

class MaestroEditarCheck extends Component {
    state = {
        edit: false,
        maestro: []
    }
    editClick = () => {
        if (this.state.edit === false) {
           this.setState({
                edit: true
            })
        } else {
            this.setState({
                edit: false
            })
        }
    }
    acceptClick = () => {
        if (this.state.maestro.length > 0) {
            this.props.accept(this.state.maestro)
        } else {
            this.props.accept(this.props.row)
        }
    }
    editMaestro = (maestro) => {
        this.setState({
            maestro
        }, () => {
            this.editClick()
        })
    }
    render() {                        
        return (  
            <React.Fragment>
                {
                    (!this.state.edit)
                        ?   (this.state.maestro.length > 0)
                                ?   this.state.maestro.map((value, index) => (
                                        <MaestroCheck1 
                                            maestro={value}
                                            key={index}
                                        />
                                    ))
                                :   this.props.row.map((value, index) => (
                                        <MaestroCheck1 
                                            maestro={value}
                                            key={index}
                                        />
                                    ))
                        :   (this.state.maestro.length > 0)
                                ?   <MaestroEdit
                                        maestro={this.state.maestro}
                                        edit={this.editMaestro}
                                    />
                                :   <MaestroEdit
                                        maestro={this.props.row}
                                        edit={this.editMaestro}
                                    />
                }
                {
                    (!this.state.edit)
                        ?   <React.Fragment>                               
                                <button className="btn edit-button" onClick={this.editClick}><i className="fas fa-pencil-alt"></i> Editar</button>
                                <button className="btn done-button" onClick={this.acceptClick}><i className="fas fa-check"></i> Aceptar</button>
                            </React.Fragment>
                        :   ""
                }
            </React.Fragment>
        );
    }
}
 
export default MaestroEditarCheck;