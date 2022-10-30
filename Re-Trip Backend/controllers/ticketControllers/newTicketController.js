const newTicket = require('../../models/tickets/newTicket')

exports.newTicket = async (req, res) => {
  const {
    from,
    to,
    date,
    time,
    trainName,
    ticketClass,
    coachNo,
    seatNo,
    fare,
    postedBy
  } = req.body;

  console.log("infos", req.body);

  const addNewTicket = new newTicket({
    from,
    to,
    date,
    time,
    trainName,
    ticketClass,
    coachNo,
    seatNo,
    fare,
    postedBy
  });
  const saveNewTicket = await addNewTicket.save().catch((err) => {
    console.log("Some Error Occured in Saving Ticket", err);
    res.status(500).json({ 
      message: "Problems Occured in Creating New Ticket" });
  })
  if (saveNewTicket) {
    res.status(200).json({ 
      message: "Ticket Post Successfull" })
  }
}