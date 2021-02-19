import React from 'react';
import {Link} from "react-router-dom";

const Ticket = ({ticket}) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <h5 className="card-title">
                    Estado: {ticket.estado}
                </h5>
                {/*<img*/}
                {/*    className="card-img-top mx-auto"*/}
                {/*    src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"*/}
                {/*/>*/}
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        Paciente:
                    </h5>
                    <h6><Link to={`/admin/user/${ticket.refUsuario._id}`}>{ticket.refUsuario.nombres} <br/>{ticket.refUsuario.apellidos}</Link></h6>
                    <h5 className="card-title">
                        Fecha Cita:
                    </h5>
                    <h6>{new Intl.DateTimeFormat("es-MX",{
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                    }).format(new Date(ticket.fechaCita))}<br/>
                        {new Date(ticket.fechaCita).getHours() +":"+ new Date(ticket.fechaCita).getMinutes()}
                    </h6>
                    {/*<div className="ratings mt-auto">*/}
                    {/*    <div className="rating-outer">*/}
                    {/*        <div className="rating-inner"></div>*/}
                    {/*    </div>*/}
                    {/*    <span id="no_of_reviews">(5 Reviews)</span>*/}
                    {/*</div>*/}
                    <h5 className="card-title">Celular: </h5><h6>{ticket.refUsuario.celular}</h6>
                    <h5 className="card-title">Descripción:</h5>
                    <h6>{ticket.descripcion}</h6>
                    <a href="#" id="view_btn" className="btn btn-block">Aceptar</a>
                    <a href="#" id="view_btn_rech" className="btn btn-block">Rechazar</a>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
