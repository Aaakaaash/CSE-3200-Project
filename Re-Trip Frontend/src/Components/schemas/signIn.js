import { string, object, number, date, time } from "yup";
import * as Yup from "yup";


//using yup for data constrains
const signInSchema = object().shape({
  email: string()
    .min(15, "This field must be at least 15 characters long")
    .max(35, "This field must be at most 20 characters long")
    .required("This field must not be empty"),
  password: string()
    .min(5, "This field must be at least 5 characters long")
    .max(12, "This field must be at most 20 characters long")
    .required("This field must not be empty"),
});

export default signInSchema;
