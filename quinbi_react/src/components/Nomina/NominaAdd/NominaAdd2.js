import React, { Component } from 'react';
import CheckBox from './CheckBox';

class NominaAdd2 extends Component {
    state = {  
        showInputs: [],
        optionsChecked: [],
        dias_extras: [],
        ausencias: [],
        data: []
    }
    changeEvent = (event) => {
        const options = this.state.optionsChecked
        const { showInputs, dias_extras, ausencias } = this.state
        
        let selectedValue = event.target.value;
        let selectedName = event.target.name;
        let valuesChecked = {id: selectedValue, name: selectedName}
        let optionsChecked

        if (event.target.checked === true) {
            optionsChecked = [...options, valuesChecked]
            this.setState({
                showInputs: [...showInputs, {id: selectedValue, show: true }],
                optionsChecked
            });     
        } else {
            let optionsChecked = this.deleteRow(options, selectedValue)
            let hideInput = this.deleteRow(showInputs, selectedValue)
            let extras = this.deleteRow(dias_extras, selectedValue)
            let aus = this.deleteRow(ausencias, selectedValue)

            this.setState({
                showInputs: hideInput,
                optionsChecked,
                dias_extras: extras,
                ausencias: aus
            });
        }
    }
    changeData = e => {
        let value = e.target.value
        let nameId = e.target.id.split('_')
        let name = nameId[0]
        let id = nameId[1]
        
        console.log(name, id, value)
        const { ausencias, dias_extras } = this.state
        if (name === 'extra') {
            let dias = this.checkState(dias_extras, id, value)
            this.setState({ dias_extras: dias });
        }
        if (name === 'aus') {
            let dias = this.checkState(ausencias, id, value)
            this.setState({ ausencias : dias});
        }
        console.log(this.state);
    }
    checkState = (stateData, id, value) => {
        let datos
        
        if (stateData.length > 0) {
            if (value !== "") {
                stateData = this.deleteRow(stateData, id)
                datos = [...stateData, {id, value}]
            } else {
                datos = this.deleteRow(stateData, id)
            }
        } else {
            datos = [{id, value}]
        }
        
        return datos
    }
    deleteRow = (row, id) => (
        row.filter(r => r.id !== id)
    )

    handleSubmit = (e) => {
        e.preventDefault()

        const { ausencias, dias_extras, optionsChecked, data } = this.state
        let datos = data

        if (optionsChecked.length > 0){
            optionsChecked.map(row => {
                let id = row.id
                let ausen = dias_extras.length > 0 ? this.checkData(ausencias, id) : 0
                let extras = dias_extras.length > 0 ? this.checkData(dias_extras, id) : 0

                return datos.push({id, name: row.name, dias_extras: extras, ausencias: ausen})
            })
            this.setState({ data: datos})
            this.props.add2(this.state.data)
        } else {
            console.log("no hay ningun empleado seleccionado");
        }
        console.log(this.state.data);
    }
    checkData = (data, id) => {
        let value = 0
        data.map(d => (
            d.id === id ? value = d.value : value = 0
        ))           
        return value
    }

    render() { 
        let checkBoxArray = this.props.nomina
        let outputCheckboxes = checkBoxArray.map(function(value, i){
            return (<CheckBox
                        name={value.nombre+" "+value.apellido}
                        id={value.id}
                        key={i}
                        onChange={this.changeEvent}
                        showInputs={this.state.showInputs}
                        changeData={this.changeData} 
                    />)
        }, this)
        return (  
            <React.Fragment>
                <form className="row" onSubmit={this.handleSubmit}>
                    <div className="checkboxes row">
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