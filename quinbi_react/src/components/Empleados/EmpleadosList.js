import React from 'react';

const EmpleadosList = ({rows, verEmpleado}) => {

    return (  
        rows.map((empleado, key) => (
            <tr key={key}>
                <td>{empleado.id}</td>
                <td>{empleado.cedula}</td> 
                <td>{empleado.nombre} {empleado.apellido}</td>                                    
                <td>{empleado.fecha_ingreso}</td> 
                <td>{empleado.email}</td>
                <td className="table-btn">
                    <button 
                        onClick={() => verEmpleado(empleado)} 
                        className="btn ver">
                        <i className="fas fa-search"></i> Ver
                    </button>
                </td> 
            </tr>
        ))
    );

}
 
export default EmpleadosList;