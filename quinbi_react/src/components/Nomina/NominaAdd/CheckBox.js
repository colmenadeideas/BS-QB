import React, { Component } from 'react';

class CheckBox extends Component {
    render() {
        const { id, name, onChange, changeData, showInputs } = this.props    
        return (
            <React.Fragment>
                <div className="div-40 col-5">
                    <input type="checkbox" id={"check_"+id} value={id} name={name} onChange={onChange} />
                    <div className="circular"></div>
                    <label htmlFor={id}><h6>{name}</h6></label>
                </div>
                <div className="div-60 col-6">
                    {/* {console.log(showInputs)} */}
                    {
                        showInputs.map((s, i) => (
                            (s.show && id === s.id ) 
                            ?
                                <div key={i}>
                                    <input type="number" id={"extra_"+id} className="input-square" pattern="[0-9]" onChange={changeData}/><span>Dias Extras</span>
                                    <input type="number" id={"aus_"+id} className="input-square" pattern="[0-9][0-9]" onChange={changeData}/>Ausencias
                                </div>
                            :
                                <div key={i}></div>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}
 
export default CheckBox;
