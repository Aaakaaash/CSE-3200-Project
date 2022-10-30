const baseUrl = "http://localhost:4050";
export const apiEndpoints = {
  getAllActiveTickets: `${baseUrl}${"/get-tickets"}`,
  signUp: `${baseUrl}${"/sign-up"}`,
  signIn: `${baseUrl}${"/sign-in"}`,
  newTicket: `${baseUrl}${"/new-ticket"}`,
  getTicketById: "",
  editTicketById: "",
};