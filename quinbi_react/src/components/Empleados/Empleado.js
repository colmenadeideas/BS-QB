import React from 'react';

const Empleado = ({empleado, editarEmpleado, verEmpleado}) => {
    return ( 
        <tr>
            <td>{empleado.id}</td>
            <td>{empleado.cedula}</td> 
            <td>{empleado.nombre} {empleado.apellido}</td>                                    
            <td>{empleado.fecha_ingreso}</td> 
            <td>{empleado.email}</td>
            <td className="table-btn">
                <button 
                    onClick={() => editarEmpleado(empleado)} 
                    className="btn editar">
                    <i className="fas fa-pencil-alt"></i> Editar
                </button>

                <button 
                    onClick={() => verEmpleado(empleado)} 
                    className="btn ver">
                    <i className="fas fa-search"></i> Ver
                </button>
            </td> 
        </tr>
        );
}
 
export default Empleado;