import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-black bg-black">
            <div className="col-1 logo">Quinbi</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-9 collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i> Entidades
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <small className="text-muted">Clientes</small>
                            <Link to="/quinbi/entidades/clientes/agenda" className="dropdown-item"><i className="fas fa-book"></i>Agenda</Link>
                            <Link to="/quinbi/entidades/clientes/agregar" className="dropdown-item"><i className="fas fa-plus-circle"></i>Agregar Cliente</Link>
                            <hr/>
                            <small className="text-muted">Proveedores</small>
                            <Link to="/quinbi/entidades/proveedores/agenda" className="dropdown-item"><i className="fas fa-book"></i>Agenda</Link>
                            <Link to="/quinbi/entidades/proveedores/agregar" className="dropdown-item"><i className="fas fa-plus-circle"></i>Agregar Proveedor</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-credit-card"></i> Pagos y Cobros
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/quinbi/maestro" className="dropdown-item">Maestro</Link>
                            <Link to="/quinbi/empleados" className="dropdown-item">Empleados</Link>
                            <Link to="/quinbi/nomina" className="dropdown-item">Nomina</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-calendar-alt"></i> Impuestos
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/quinbi/impuestos/retenciones" className="dropdown-item">Retenciones</Link>
                            <button className="dropdown-item">Another action</button>
                            <button className="dropdown-item">Something else here</button>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-globe-americas"></i> Dominios
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <button className="dropdown-item">Action</button>
                            <button className="dropdown-item">Another action</button>
                            <button className="dropdown-item">Something else here</button>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-file"></i> Presupuestos
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <button className="dropdown-item">Action</button>
                            <button className="dropdown-item">Another action</button>
                            <button className="dropdown-item">Something else here</button>
                        </div>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-cog"></i> Hola, Usuario
                    </button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <button className="dropdown-item">Action</button>
                        <button className="dropdown-item">Another action</button>
                        <button className="dropdown-item">Something else here</button>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;