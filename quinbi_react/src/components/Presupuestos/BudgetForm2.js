import React, { Component } from 'react';

class BudgetForm2 extends Component {
    state = { 
        id: "",
        id_cliente: "",
        direccion: ""
    }

    readData = (e) => {
        console.log(e.target.id, e.target.value);
        this.setState({
            ...this.state,
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var save;
        save = {
            id: 120000,
            id_cliente: this.state.id_cliente,
            direccion: this.state.direccion,
        }
        this.props.add(save)
    }


    render() { 
        const { clients } = this.props

        return ( 
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={this.handleSubmit} className="">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="tipo_proyecto">Tipo de Proyecto</label>
                                <select id="tipo_proyecto" className="form-control" onChange={this.readData}>
                                    <option value="">...</option>
                                    {
                                        (clients)
                                        ?   clients.map((client, key) => (
                                                <option key={key} value={client.id}>{client.razon_social}</option>
                                            ))
                                        :   <option value="">...</option>
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="w-100"></div>
                        {
                            (this.state.id_cliente) 
                                ?   <button type="submit" className="btn btn-success" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Siguiente</button>
                                :   <button type="submit" className="btn btn-danger disabled">Siguiente</button>
                        }
                    </form>
                </div>
            </div>
        );
    }
}
 
export default BudgetForm2;