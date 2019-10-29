import React, { Component } from 'react';
//import { formatoFecha } from '../formatoFecha'
import NominaData from './NominaData'
import NominaRecibo from './NominaRecibo';
import NominaComprobante from './NominaComprobante';

class NominaPreview extends Component {
    state = {  
        nomina: true,
        recibo: false,
        comprobante: false
    }
    closePopup = () => {
        this.props.closePopup("true")
    }
    verRecibo = () => {
        this.setState({
            nomina: false,
            recibo: true
        })
    }
    generarComprobante = () => {
        this.setState({
            nomina: false,
            comprobante: true
        })
    }
    regresarPreview = () => {
        this.setState({
            nomina: true,
            recibo: false,
            comprobante: false
        })
    }
    imprimir = () => {
        console.log("imprimir")
    }
    render() { 
        console.log(this.props);
        
        const { nomina } = this.props
        return (  
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={this.closePopup} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    {
                        (this.state.nomina)
                            ?   <React.Fragment>
                                    <h4 className="nomina-text">Nomina del <span className="fecha">{nomina.fecha_desde}</span> al <span className="fecha">{nomina.fecha_hasta}</span></h4>
                                    <div className="w-100"></div>
                                    <h6 className="nomina-text">elaboración {nomina.fecha} por Delia E. Lárez</h6>
                                    <table className="col-11 table table-striped table-hover"> 
                                        <tbody>
                                            {
                                                (this.state.nomina) 
                                                    ?   <NominaData 
                                                            nomina={nomina}
                                                            recibo={this.verRecibo}
                                                            generarComprobante={this.generarComprobante} 
                                                        />
                                                    : ""
                                                
                                                (this.state.comprobante)
                                                    ?   <NominaComprobante
                                                            nomina={nomina}
                                                            regresarPreview={this.regresarPreview}
                                                            imprimir={this.imprimir} 
                                                        />
                                                    :   ""

                                                (this.state.recibo)
                                                    ?   <NominaRecibo
                                                            nomina={nomina}
                                                            regresarPreview={this.regresarPreview}
                                                            imprimir={this.imprimir} 
                                                        />
                                                    :   ""
                                            }
                                        </tbody>
                                    </table>
                                </React.Fragment>
                            :   ""
                    }
                    {
                        (this.state.recibo)
                            ?   <NominaRecibo
                                    nomina={nomina}
                                    regresarPreview={this.regresarPreview}
                                    imprimir={this.imprimir} 
                                />
                            :   ""
                    }
                    {
                        (this.state.comprobante)
                            ?   <NominaComprobante
                                    nomina={nomina}
                                    regresarPreview={this.regresarPreview}
                                    imprimir={this.imprimir} 
                                />
                            :   ""
                    }
                </div>
            </div>
        );
    }
}
 
export default NominaPreview;