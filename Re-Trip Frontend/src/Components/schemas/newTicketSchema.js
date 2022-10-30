import { string, object, number,date,time } from "yup";
import * as Yup from "yup";

const newTicketSchema = object().shape({
  from: string()
    .min(3, "This field must be at least 3 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  to: string()
    .min(3, "This field must be at least 3 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  date: Yup.string().required("This field must not be empty"),
  time: Yup.string().required("This field must not be empty"),
  trainName: string()
    .min(3, "This field must be at least 3 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  ticketClass: string()
    .min(3, "This field must be at least 3 characters long")
    .max(20, "This field must be at most 12 characters long")
    .required("This field must not be empty"),
  coachNo: string()
    .min(1, "This field must be at least 1 characters long")
    .max(10, "This field must be at most 10 characters long")
    .required("This field must not be empty"),
  fare: number()
    .min(100, "The Minimum Value for Ticket Sell is BDT 100")
    .max(5000, "The Maximum Value for Ticket Sell is BDT 5000")
    .required("This field must not be empty"),
});

export default newTicketSchema;