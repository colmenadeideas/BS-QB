import React from 'react';

const EmpleadoShow = ({closePopup, row}) => {
    return (
        <div className="bg-popup fadein">
                <div className="popup row justify-content-center">
                    <div onClick={() => closePopup()} className="close-icon"><i className="fas fa-times"></i></div>
                    <hr className="col-12" />
                    <h2 className="col-12 text-uppercase">VER Empleado</h2>
                    <hr className="col-10" />
                    <div className="col-10">

                        <div className="row">
                            <div className="col-5">
                                <img src="../img/profile.jpg" className="w-100" alt="Foto"/>
                            </div>
                            <div className="col-7 empleado-ficha">
                                <h4>{row.nombre} {row.apellido}</h4>
                                <span>Ci: {row.cedula}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-left m-1 mt-4">
                                <p>Fecha de Ingreso: <small className="text-muted">{row.fecha_ingreso}</small></p>

                            </div>
                            <div className="col-12 text-left m-1"> 
                                <p>Correo Electronico: <small className="text-muted">{row.email}</small></p>
                                
                            </div>
                        </div>
                        <div className="row">
                            <hr className="col-12"/>
                            <h3 className="m-auto">Informacion</h3>
                            <hr className="col-12"/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem id impedit et! Incidunt unde 
                                modi at quis aliquid voluptates odit eaque asperiores magnam beatae, ad, eligendi numquam 
                                mollitia et sunt consequuntur quasi dolorum iste blanditiis earum. Nemo soluta deleniti tempore 
                                animi. Consequuntur a amet numquam, adipisci harum dicta autem quia et cumque fugiat labore 
                                voluptatum laudantium voluptatem eum repellendus veniam.
                            </p>
                        </div>
                        {/* <button className="btn edit-button" onClick={this.editClick}><i className="fas fa-pencil-alt"></i> Editar</button> */}
                        <button className="btn done-button mb-3" onClick={() => closePopup()}><i className="fas fa-check"></i> Aceptar</button>    
                    </div>
                </div>
            </div>
    );
}
 
export default EmpleadoShow;