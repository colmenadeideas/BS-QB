import React, { Component } from 'react';
import CheckBox from './CheckBox';

class NominaAdd2 extends Component {
    state = {  
        optionsChecked: [] 
    }
    changeEvent = (event) => {
        var checkedArray = this.state.optionsChecked;
        let selectedValue = event.target.value;
        if (event.target.checked === true) {
        	checkedArray.push(selectedValue);
            this.setState({
              optionsChecked: checkedArray
            });     
        } else {
        	let valueIndex = checkedArray.indexOf(selectedValue);
			checkedArray.splice(valueIndex, 1);
            this.setState({
              optionsChecked: checkedArray
            });
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.add2(this.state.optionsChecked)
    }
    render() { 
        let checkBoxArray = ['Carlos Moreno','Alejandra Ortega','Katherine Ramos','Elio Márquez','Joanna Agudo']
        let outputCheckboxes = checkBoxArray.map(function(string, i){
        	return (<CheckBox value={string} id={'string_' + i} key={i} onChange={this.changeEvent} />)
        }, this)
        return (  
            <React.Fragment>
                <form className="row" onSubmit={this.handleSubmit}>
                    <div className="checkboxes">
                        {outputCheckboxes}
                    </div>
                    <div className="w-100"></div>
                    <div className="check-changes"> 
                        <button className="btn btn-warning espacio" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Regresar</button>
                        {    
                            (this.state.optionsChecked.length === 0)
                            ?   <button type="button" className="btn btn-danger">Revisar los cambios</button>
                            :   <button type="submit" className="btn btn-success">Revisar los cambios</button>
                        }
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
 
export default NominaAdd2;