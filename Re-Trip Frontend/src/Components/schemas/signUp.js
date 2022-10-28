import { string, object, number, date, time } from "yup";
import * as Yup from "yup";

const signUpSchema = object().shape({
  fullName: string()
    .min(5, "This field must be at least 5 characters long")
    .max(25, "This field must be at most 25 characters long")
    .required("This field must not be empty"),
  nid: string()
    .min(12, "This field must be at least 12 characters long")
    .max(16, "This field must be at most 16 characters long")
    .required("This field must not be empty"),
  phone: string()
    .min(11, "This field must be at least 11 characters long")
    .max(14, "This field must be at most 14 characters long")
    .required("This field must not be empty"),
  email: string()
    .min(15, "This field must be at least 15 characters long")
    .max(35, "This field must be at most 20 characters long")
    .required("This field must not be empty"),
  password: string()
    .min(5, "This field must be at least 5 characters long")
    .max(12, "This field must be at most 20 characters long")
    .required("This field must not be empty"),
});

export default signUpSchema;
