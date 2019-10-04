import React, { Component } from 'react';
import Calendar from 'react-calendar';

class NominaAdd1 extends Component {
    state = {
        date: new Date()
    }
    componentDidMount() {
        if (this.props.nomina.length > 0) {
            this.setState({
                date: this.props.nomina
            })
        }
    }
    onChange = date => {
        this.setState({ date })
    }
    handleClick = () => {
        this.props.add1(this.state.date)
    }
    render() { 
        return (  
            <React.Fragment>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    selectRange={true}
                />
                <br />
                {
                    (this.state.date.length > 1)
                        ?   <button onClick={this.handleClick} className="btn btn-success" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Siguiente</button>
                        :   <button className="btn btn-danger">Siguiente</button>
                }
            </React.Fragment>
        );
    }
}
 
export default NominaAdd1;