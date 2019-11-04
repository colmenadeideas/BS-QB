import React, { Component } from 'react';

class BudgetForm1 extends Component {
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
        this.props.budget1(save)
    }


    render() { 
        const { clients } = this.props

        return ( 
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={this.handleSubmit} className="">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="id_cliente">Cliente</label>
                                <select id="id_cliente" className="form-control" onChange={this.readData}>
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
                            <div className="form-group col-md-2">
                                <label htmlFor="atencion">Atencion a:</label>
                                <select id="atencion" className="form-control">
                                    <option value="">...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="direccion">Direccion:</label>
                                <select id="direccion" className="form-control" onChange={this.readData}>
                                    <option value="">...</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-100"></div>
                        {
                            (this.state.id_cliente) 
                                ?   <button type="submit" className="btn btn-success" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Siguiente</button>
                                :   <button type="submit" className="btn btn-danger disabled">Siguiente</button>
                        }
                    </form>
                </div>
            </div>
        );
    }
}
 
export default BudgetForm1;