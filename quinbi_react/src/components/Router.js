import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Maestro from './Maestro/Maestro';
import Nomina from './Nomina/Nomina';
import Empleados from './Empleados/Empleados';
import Retenciones from './Impuestos/Retenciones';
import Budget from './Presupuestos/Budgets'

class Router extends Component {
    state = {
        pathname: ''
    }
    pathname = (e) => {
        if (e !== this.state.pathname) {
            this.setState({
                pathname: e
            })
        }  
    }
    
    render() { 
        return (  
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/quinbi/maestro" component={Maestro} />
                    <Route exact path="/quinbi/nomina" component={Nomina} />
                    <Route exact path="/quinbi/empleados" component={Empleados} />
                    <Route exact path="/quinbi/impuestos/retenciones" component={Retenciones} />
                    <Route exact path="/quinbi/presupuestos" component={Budget} />
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Router;