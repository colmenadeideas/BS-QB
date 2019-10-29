import React from 'react';

const NominaRecibo = (nomina, regresarPreview, imprimir) => {
    return ( 
        <div className="comprobantes">
            {/* <h2>RECIBO</h2>
            <div className="w-100"></div> */}
            <button onClick={() => regresarPreview()} className="regresar"><i className="fas fa-arrow-circle-left"></i> Regresar</button>
            <button onClick={() => imprimir()} className="imprimir"><i className="fas fa-print"></i> Imprimir</button>
        </div>
    );
}
 
export default NominaRecibo;