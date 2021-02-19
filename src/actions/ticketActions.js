import axios from "axios";
import {
    ALL_TICKETS_REQUEST,
    ALL_TICKETS_SUCCESS,
    ALL_TICKETS_FAIL,
    USUARIO_DETAIL_REQUEST,
    USUARIO_DETAIL_SUCCESS,
    USUARIO_DETAIL_FAIL,
    CLEAR_ERRORS} from "../constants/ticketConstants";

export const getTickets = (keyword = '', currentPage = 1) => async (dispatch)=>{
    try{
        dispatch({type: ALL_TICKETS_REQUEST})
        const {data} = await axios.get(`/api/v1/admin/tickets?keyword=${keyword}&page=${currentPage}`)

        dispatch({
            type: ALL_TICKETS_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: ALL_TICKETS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getUser = (id) => async (dispatch)=>{
    try{
        dispatch({type: USUARIO_DETAIL_REQUEST})
        const {data} = await axios.get(`/api/v1/admin/user/${id}`)

        dispatch({
            type: USUARIO_DETAIL_SUCCESS,
            payload: data.user
        })
    }catch (error) {
        dispatch({
            type: USUARIO_DETAIL_FAIL,
            payload: error.response.data.message
        })
    }
}
//Limpiar Errors
export const clearErrors = () => async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}