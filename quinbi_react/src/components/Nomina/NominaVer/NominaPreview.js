import React, { Component } from 'react';

class NominaPreview extends Component {
    state = {  
        nomina: true,
        recibo: false,
        comprobante: false
    }
    formatoFecha = (datos) => {
        var fecha = datos.toString()
        var month = fecha.substr(4, 3)
        var day = fecha.substr(8, 2)
        var year = fecha.substr(11, 4)
        var hora = fecha.substr(16, 8)
        switch (month) {
            case "Jan":
                month = 1
                break;
            case "Feb":
                month = 2
                break;
            case "Mar":
                month = 3
                break;
            case "Apr":
                month = 4
                break;
            case "May":
                month = 5
                break;
            case "Jun":
                month = 6
                break;
            case "Jul":
                month = 7
                break;
            case "Aug":
                month = 8
                break;
            case "Sep":
                month = 9
                break;
            case "Oct":
                month = 10
                break;
            case "Nov":
                month = 11
                break;
            default:
                month = 12
                break;
        }
        fecha = `${year}-${month}-${day} ${hora}`
        return fecha
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
        let fecha = new Date()
        
        const { dateFrom, dateTo, empleados } = this.props.nomina
        return (  
            <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={this.closePopup} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    {
                        (this.state.nomina)
                            ?   <React.Fragment>
                                    <h4 className="nomina-text">Nomina del <span className="fecha">{dateFrom}</span> al <span className="fecha">{dateTo}</span></h4>
                                    <div className="w-100"></div>
                                    <h6 className="nomina-text">elaboración {this.formatoFecha(fecha)} por Delia E. Lárez</h6>
                                    <table className="col-11 table table-striped table-hover"> 
                                        <tbody>
                                            {
                                                empleados.map((value, key) => (
                                                    <tr key={key}>
                                                        <td>{value}</td>
                                                        <td>Bs. 000.000,00</td>
                                                        <td>
                                                            <button onClick={this.verRecibo} className="btn-nomina"><i className="fas fa-search"></i> Ver recibo</button>
                                                            <button onClick={this.generarComprobante} className="btn-nomina"><i className="fas fa-file"></i> Generar comprobante</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </React.Fragment>
                            :   ""
                    }
                    {
                        (this.state.recibo)
                            ?   <div className="comprobantes">
                                    <h2>RECIBO</h2>
                                    <div className="w-100"></div>
                                    <button onClick={this.regresarPreview} className="regresar"><i className="fas fa-arrow-circle-left"></i> Regresar</button>
                                    <button onClick={this.imprimir} className="imprimir"><i className="fas fa-print"></i> Imprimir</button>
                                </div>
                            :   ""
                    }
                    {
                        (this.state.comprobante)
                            ?   <div className="comprobantes">
                                    <h2>COMPROBANTE</h2>
                                    <div className="w-100"></div>
                                    <button onClick={this.regresarPreview} className="regresar"><i className="fas fa-arrow-circle-left"></i> Regresar</button>
                                    <button onClick={this.imprimir} className="imprimir"><i className="fas fa-print"></i> Imprimir</button>
                                </div>
                            :   ""
                    }
                </div>
            </div>
        );
    }
}
 
export default NominaPreview;