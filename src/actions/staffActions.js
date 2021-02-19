import axios from "axios";
import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from "../constants/staffConstants";

//Login
export const login = (email, password) => async (dispatch) =>{
    try{
        dispatch({type: LOGIN_REQUEST})
        const conf = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/v1/staff/login', {email, password}, conf)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    }catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}
//Registrar Staff
export const register = (userData) => async (dispatch) =>{
    try{
        dispatch({type: REGISTER_USER_REQUEST})
        const conf = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const {data} = await axios.post('/api/v1/staff/register', userData, conf)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })

    }catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
//Load Staff
export const loadSTaff = () => async (dispatch) =>{
    try{
        dispatch({type: LOAD_USER_REQUEST})

        const {data} = await axios.get('/api/v1/staff/me')

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.staff
        })

    }catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
//Logout Staff
export const logoutStaff = () => async (dispatch) =>{
    try{

        await axios.get('/api/v1/staff/logout')

        dispatch({
            type: LOGOUT_SUCCESS,
        })

    }catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

//Limpiar Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}