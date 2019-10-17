import React, { Component } from 'react';

class CheckBox extends Component {
    render() {
        const { id, name, onChange, changeData, showInputs } = this.props    
        return (
            <div className="empleado">
                <div className="div-40">
                    <input type="checkbox" id={"check_"+id} value={id} name={name} onChange={onChange} />
                    <div className="circular"></div>
                    <label htmlFor={id}><h6>{name}</h6></label>
                </div>
                <div className="div-60">
                    {
                        showInputs.map(show => {
                            (show.show && id === show.id ) ?
                                <React.Fragment>
                                    <input type="number" id={"extra_"+id} className="input-square" pattern="[0-9]" onChange={changeData}/><span>Dias Extras</span>
                                    <input type="number" id={"aus_"+id} className="input-square" pattern="[0-9][0-9]" onChange={changeData}/>Ausencias
                                </React.Fragment>
                            : <div></div>
                        })
                    }
                </div>
            </div>
        )
    }
}
 
export default CheckBox;
