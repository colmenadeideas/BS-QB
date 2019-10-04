import React from 'react'

const MaestroCheck1 = (props) => {
    var keys = Object.keys(props.maestro)
    var maestro = props.maestro
    return (  
        <div>
            {
                keys.map((value, index) => {
                    return (
                        <div className="check" key={index}>
                            <p className="key"><strong>{value}:</strong> {maestro[value]}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default MaestroCheck1;