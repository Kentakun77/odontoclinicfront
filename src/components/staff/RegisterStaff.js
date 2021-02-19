import React, {Fragment, useEffect, useState} from 'react';

import {useAlert} from "react-alert";
import {useDispatch, useSelector} from "react-redux";
import MetaData from "../layout/MetaData";

import {register, clearErrors} from "../../actions/staffActions";

const RegisterStaff = ({history}) => {

    const [staff, setStaff] = useState({

        nombres: '',
        apellidos: '',
        email: '',
        password: '',
        celular: 0,
        especialidad: '',
        fechaNac: ''
    })
    const {nombres, apellidos, email, password, celular, especialidad, fechaNac} = staff;

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.png')

    const alert = useAlert();
    const dispatch = useDispatch();

    const {isAuthenticated, error, loading} = useSelector(state => state.auth);

    useEffect(()=>{

        if (isAuthenticated){
            history.push('/')
        }
        if (error){
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.set('nombres', nombres);
        formData.set('apellidos', apellidos);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('celular', celular);
        formData.set('especialidad', especialidad);
        formData.set('fechaNac', fechaNac);
        formData.set('avatar', avatar);

        dispatch(register(formData))
    }
    const onChange = e => {
        if (e.target.name === 'avatar'){
            const reader = new FileReader();
            reader.onload = () =>{
                if (reader.readyState === 2){
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }else{
            setStaff({...staff, [e.target.name]: e.target.value})
        }
    }
    return (
        <Fragment>
            <MetaData title={'Registro Staff'}/>

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mb-3">Register</h1>

                        <div className="form-group">
                            <label htmlFor="email_field">Nombres</label>
                            <input type="name"
                                   id="nombres_field"
                                   className="form-control"
                                   name='nombres'
                                   value={nombres}
                                   onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email_field">Apellidos</label>
                            <input type="name"
                                   id="apellidos_field"
                                   className="form-control"
                                   name='apellidos'
                                   value={apellidos}
                                   onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                name='password'
                                value={password}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Celular</label>
                            <input type="number"
                                   id="celular_field"
                                   className="form-control"
                                   name='celular'
                                   value={celular}
                                   onChange={onChange}
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="email_field">Especialidad</label>
                            <input type="name"
                                   id="especialidad_field"
                                   className="form-control"
                                   name='especialidad'
                                   value={especialidad}
                                   onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email_field">Año de Nacimiento:</label>
                            <input type="email_field"
                                   id="fechaNac_field"
                                   className="form-control"
                                   name='fechaNac'
                                   value={fechaNac}
                                   onChange={onChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='avatar_upload'>Avatar</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <figure className='avatar mr-3 item-rtl'>
                                        <img
                                            src={avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                        accept="images/*"
                                        onChange={onChange}
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Avatar
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading ? true : false}
                        >
                            REGISTRAR
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default RegisterStaff;
