import {
    ALL_TICKETS_REQUEST,
    ALL_TICKETS_SUCCESS,
    ALL_TICKETS_FAIL,
    USUARIO_DETAIL_REQUEST,
    USUARIO_DETAIL_SUCCESS,
    USUARIO_DETAIL_FAIL,
    CLEAR_ERRORS} from '../constants/ticketConstants'

export const ticketsReducer = (state= {tickets:[]}, action) =>{
    switch (action.type) {
        case ALL_TICKETS_REQUEST:
            return {
                loading: true,
                tickets: []
            }
        case ALL_TICKETS_SUCCESS:
            return {
                loading: false,
                tickets: action.payload.tickets,
                totalTickets: action.payload.totalTickets,
                resPerPage: action.payload.resPerPage
            }
        case ALL_TICKETS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
export const usuarioDetailReducer = (state = {user :{} }, action)=>{
    switch (action.type) {
        case USUARIO_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USUARIO_DETAIL_SUCCESS:
            return {
                loading: false,
                user : action.payload
            }
        case USUARIO_DETAIL_FAIL:
            return {
                ...state,
                error: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}