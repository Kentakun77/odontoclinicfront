import React, {Fragment, useEffect} from 'react';

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import {useAlert} from "react-alert";
import {useDispatch, useSelector} from "react-redux";
import {getUser, clearErrors} from "../../actions/ticketActions";

const UsuarioDetail = ({match}) => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const {loading, error, user} = useSelector(state => state.user)
    useEffect(()=>{

        dispatch(getUser(match.params.id))
        if (error){
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, match.params.id])
    return (

        <Fragment>
            {loading ? <Loader/> : (
                <Fragment>
                    <MetaData title={user.nombres +" "+ user.apellidos}/>
                    <div className="row f-flex justify-content-around">
                        <div className="col-12 col-lg-5 img-fluid" id="product_image">
                            <img
                                src="https://ambitioustracks.com/wp-content/uploads/2017/01/1.-fundadores.png"
                                alt="sdf" height="300" width="300"/>
                        </div>

                        <div className="col-12 col-lg-5 mt-5">
                            <h5>Paciente:</h5>
                            <h6>{user.nombres +" "+ user.apellidos}</h6>
                            <hr />
                            <h5>Email:</h5>
                            <h6>{user.email}</h6>
                            <hr />
                            <h5>Celular:</h5>
                            <h6>{user.celular}</h6>
                            <hr />
                            <h5>Ocupación:</h5>
                            <h6>{user.ocupacion}</h6>
                            <hr />
                            <h5>Edad:</h5>
                            <h6>{new Date().getFullYear() - new Date(user.fechaNac).getFullYear()}</h6>
                            <h5>Fecha Nacimiento:</h5>
                            <h6>{new Date(user.fechaNac).toLocaleDateString("es-MX", {year: "numeric", month: "long", day: "2-digit"})}</h6>
                            <h5>Fecha de Registro:</h5>
                            <h6>{new Date(user.createdAt).toLocaleDateString("es-MX", {year: "numeric", month: "long", day: "2-digit"})}</h6>
                            <hr/>

                            <a href="#" id="view_btn" className="btn btn-block">Aceptar</a>
                            <a href="#" id="view_btn_rech" className="btn btn-block">Rechazar</a>

                        </div>
                    </div>

                </Fragment>

            )}
        </Fragment>
    );
};

export default UsuarioDetail;
