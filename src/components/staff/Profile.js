import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
const Profile = () => {

    const {staff, loading} = useSelector(state => state.auth)
    return (
        <Fragment>
            {loading ? <Loader/>: (
                <Fragment>
                    <MetaData title={'Tu Perfil'}/>
                    <h2 className="mt-5 ml-5">My Profile</h2>
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid" src={staff.avatar.url} alt={staff.nombres + " "+staff.apellidos}/>
                            </figure>
                            <Link to="perfil/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                                Edit Profile
                            </Link>
                        </div>

                        <div className="col-12 col-md-5">
                            <h4>Nombre Completo</h4>
                            <p>{staff.nombres + " "+staff.apellidos}</p>

                            <h4>Email</h4>
                            <p>{staff.email}</p>

                            <h4>Rol</h4>
                            <p>{staff.rol}</p>

                            <h4>Celular</h4>
                            <p>{staff.celular}</p>

                            <h4>Especialidad</h4>
                            <p>{staff.email}</p>

                            <h4>Edad</h4>
                            <p>{staff.email}</p>

                            <h4>Registrado</h4>
                            <p>{staff.email}</p>


                            <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                                Change Password
                            </Link>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Profile;
