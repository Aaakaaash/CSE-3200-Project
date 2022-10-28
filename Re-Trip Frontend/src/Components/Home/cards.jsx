import '../../Styles/HomePage/cards.css'
const CardComponent = (props) => {
  
    return (
      <>
        <div className="card-container">
          <div className="box">
            <div className="card-header">
              <h3>{props.allTicket.trainName}</h3>
            </div>
            <div className="ticket-content">
              <div className="ticket-info">
                <span className="info">Date of Journey</span> :{" "}
                <span>{props.allTicket.date}</span>
              </div>
              <div className="ticket-info">
                <span className="info">Time</span> :{" "}
                <span>{props.allTicket.time}</span>
              </div>
              <div className="ticket-info">
                <span className="info">Ticket Class</span> :{"  "}
                <span>{props.allTicket.ticketClass}</span>
              </div>
              <div className="ticket-info">
                <span className="info">Number of Seats</span> : <span>{1}</span>
              </div>
            </div>
            <div className="toggle-button">
              <button className="view-more"> View More</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default CardComponent;