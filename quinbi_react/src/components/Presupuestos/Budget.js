import React from 'react';

const Budget = ({rows, showBudget}) => {
    return ( 
        rows.map((budget, key) => (
            <tr key={key}>
                <td>{budget.id}</td> 
                <td>{budget.titulo}</td>                                    
                <td>{budget.id_cliente}</td> 
                <td>{budget.fecha}</td>
                <td>{budget.subtotal}</td>
                <td className="table-btn">
                    <button 
                        onClick={() => showBudget(budget)} 
                        className="btn ver">
                        <i className="fas fa-search"></i> Ver
                    </button>
                </td> 
            </tr>            
        ))
    );
}
 
export default Budget;