import { useState,useEffect } from "react";
import "../../Styles/HomePage/ticket.css";
import CardComponent from './cards'
import {getAllTickets} from '../../APIs/rest'
function TicketSection() {
  const [allTickets,setAllTickets] = useState([])
  const getAllTicketInfo= async()=>{
      const ticketData = await getAllTickets();
     setAllTickets(ticketData);
  } 
  useEffect(() => {
    getAllTicketInfo()
  }, []);
  return (
    <>
      <div className="best">
        <h1>
          <span>Find Your Tickets</span>
        </h1>
        <div className="attributes">
          <p>
            <span className="bold">All</span>
          </p>
          <p>Train</p>
          <p>Bus</p>
          <p>Air</p>
        </div>
      </div>
      <div className="ticket-cards">
        {allTickets.map((allTicket,index) => {
          return <CardComponent key={index} allTicket={allTicket} />;
        })}
        
      </div>
    </>
  );
}

export default TicketSection;
