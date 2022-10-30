import axios from "axios";
import { apiEndpoints } from "./endpoints";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function getAllTickets() {
  try {
    const data = await axios.get(apiEndpoints.getAllActiveTickets);
    console.log(data)
    return data.data.availableTickets
  } catch (err) {
    console.log("Error Occured in Getting all tickets", err);
  }
}

export async function signUpUser(data) {
  
  try {
    const response = await axios.post(apiEndpoints.signUp, data);
    console.log(response);
    if ((response.status = 200)) {
      toast.success("Sign Up Successfull");
    window.location.href = "/sign-in";

    }
    else{
        toast.error(response.data);

    }
  } catch (err) {
    console.log(err);
  }
}

export async function signInUser(data){
  try{
        const response = await axios.post(apiEndpoints.signIn, data);
        console.log(response)

  }
  catch(err){
      toast.error("Some Error Occured");
  }
}
