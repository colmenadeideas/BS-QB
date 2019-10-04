import React, { Component } from 'react';
import NominaAddCheck from '../NominaAdd/NominaAddCheck';
import NominaEdit from './NominaEdit';

class NominaEditarCheck extends Component {
    state = {
        edit: false,
        nomina: {}
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
        if (this.state.nomina.fecha !== undefined) {
            this.props.accept(this.state.nomina)
        } else {
            this.props.accept(this.props.row)
        }
    }
    editNomina = (nomina) => {
        this.setState({
            nomina
        }, () => {
            this.editClick()
        })
    }
    render() {                        
        return (  
            <React.Fragment>
                {
                    (!this.state.edit)
                        ?   (this.state.nomina.fecha !== undefined)
                                ?   <NominaAddCheck 
                                        addNomina={this.state.nomina}
                                        edit={this.editClick}
                                        accept= {this.acceptClick}
                                    />
                                :   <NominaAddCheck 
                                        addNomina={this.props.row}
                                        edit={this.editClick}
                                        accept= {this.acceptClick}
                                    />
                        :   (this.state.nomina.fecha !== undefined)
                                ?   <NominaEdit
                                        nomina={this.state.nomina}
                                        edit={this.editNomina}
                                    />
                                :   <NominaEdit
                                        nomina={this.props.row}
                                        edit={this.editNomina}
                                    />
                }
            </React.Fragment>
        );
    }
}
 
export default NominaEditarCheck;