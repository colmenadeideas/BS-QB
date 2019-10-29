import React from 'react';

const NominaData = (nomina, recibo, generarComprobante) => {
    console.log(nomina, recibo, generarComprobante);
    return ( 
        <tr key={nomina.id}>
            <td>{nomina.numero}</td>
            <td>Bs. 000.000,00</td>
            <td>
                <button onClick={recibo} className="btn-nomina"><i className="fas fa-search"></i> Ver recibo</button>
                <button onClick={generarComprobante()} className="btn-nomina"><i className="fas fa-file"></i> Generar comprobante</button>
            </td>
        </tr>
    );
}
 
export default NominaData;