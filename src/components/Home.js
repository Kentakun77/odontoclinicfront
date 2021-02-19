import React, {Fragment, useState, useEffect} from "react";
import Pagination from 'react-js-pagination';

import MetaData from "./layout/MetaData";
import Ticket from "./ticket/Ticket";
import Loader from "./layout/Loader";

import {useDispatch, useSelector} from "react-redux";
import {getTickets} from "../actions/ticketActions";
import {useAlert} from "react-alert";

const Home = ({match}) => {

    const [currentPage, setCurrentPage] = useState(1)



    const alert = useAlert();
    const dispatch = useDispatch();
    const {loading, tickets, error, totalTickets, resPerPage} =useSelector(state => state.tickets)

    const keyword = match.params.keyword

    useEffect(()=>{

        if (error){
            alert.error(error);
        }
        dispatch(getTickets(keyword, currentPage));
    },[dispatch, error, alert, keyword, currentPage])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    return(
        <Fragment>
            {loading ? <Loader/> : (
                <Fragment>
                    <MetaData title={'Proximas Citas'}/>
                    <h1 id="products_heading">Proximos Tickets</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">
                            {tickets && tickets.map(ticket =>(
                                <Ticket key={ticket.id} ticket={ticket}/>
                            ))}
                        </div>
                    </section>
                    {resPerPage <= totalTickets && (
                        <div >
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={totalTickets}
                                onChange={setCurrentPageNo}
                                firstPageText={'Inicio'}
                                lastPageText={'Fin'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    )}
                </Fragment>
                )}
        </Fragment>
    )
}
export default Home