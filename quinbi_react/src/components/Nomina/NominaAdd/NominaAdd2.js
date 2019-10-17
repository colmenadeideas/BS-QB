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
        const showInputs = this.state.showInputs
        console.log(options)
        
        let selectedValue = event.target.value;
        let selectedName = event.target.name;
        let valuesChecked = {id: selectedValue, name: selectedName}
        let optionsChecked
        console.log(valuesChecked)
        if (event.target.checked === true) {
            optionsChecked = [...options, valuesChecked]
            this.setState({
                showInputs: [...showInputs, {id: selectedValue, show: true }],
                optionsChecked
            });     
        } else {
            console.log(options);
            let index = options.indexOf(valuesChecked)
            console.log(index);
            optionsChecked = options.splice(index, 1)
            console.log(options);

            // this.setState({
            //     optionsChecked
            // });
        }
        console.log(optionsChecked);
        console.log(this.state.optionsChecked);
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
        let index = -1
        let datos

        if (stateData.length > 0) {
            stateData.map((val, i) => (
            val.id === id ? index = i : index = -1
            ))
        }
        if (index === -1) {
            datos = [...stateData, {id, value}]
        } else {
            datos = stateData
            datos[index] = {id, value}
        }
        return datos
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { ausencias, dias_extras, optionsChecked, data } = this.state
        console.log(ausencias, dias_extras, optionsChecked);
        if (optionsChecked.length > 0){
            optionsChecked.map(row => {
                var ausen = 0
                var extras = 0
                let mensaje = ""

                this.checkData(dias_extras, row.id);

                /* if (dias_extras.length > 0) {
                    dias_extras.map(ext => {
                        if (ext.id === row.id) {
                            extras = ext.value
                        } else {
                            mensaje = "Recuerde tambien marcar los empleados en que agrego ausencias o dias extras"
                        }
                        return ext.id === row.id ? extras = ext.value : extras = 0
                    })
                }
                if (ausencias.length > 0) {
                    ausencias.map(aus => {
                        // console.log(aus)
                        return aus.id === row.id ? ausen = aus.value : ausen = 0
                    })
                }
                
                data.push({id: row.id, dias_extras: extras, ausencias: ausen})
                return this.setState({ data }); */
            })
        } else {
            console.log("no hay ningun empleado seleccionado");
        }

        console.log(this.state.data);
        //this.props.add2(this.state.data)
    }
    checkData = (data, id) => {
        if (data.length > 0) {
            /* data.filter( d => {
                if (d.id === id) {
                    let dato = d.value
                } else {
                    let dato = "m"
                }
            }) */
            console.log(data.filter(d => (d.id === id)))
            
        }
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