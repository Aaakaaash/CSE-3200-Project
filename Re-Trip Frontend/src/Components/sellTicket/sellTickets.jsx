import { Formik, Field, Form, ErrorMessage } from "formik";
import newTicketSchema from '../schemas/newTicketSchema'
import "../../Styles/SellTicket/sellTickets.css";
import {newTicket} from '../../APIs/rest'


const SellTicketComp = () => {
  const handleSubmit =(data)=>{
      newTicket(data);
      console.log(data);
  }
  return (
    <>
      <div className="hero">
        <div className="content">
          <div className="form-content">
            <div className="form-header">SELL TICKET</div>
            <div className="form">
              <div className="">
                <Formik
                  initialValues={{
                    from: "",
                    to: "",
                    date: "",
                    time: "",
                    trainName: "",
                    ticketClass: "",
                    coachNo: "",
                    fare: "",
                    postedBy: "",
                  }}
                  onSubmit={(values, actions) => {
                    const data = {
                      from: values.from,
                      to: values.to,
                      date: values.date,
                      time: values.time,
                      trainName: values.trainName,
                      ticketClass: values.ticketClass,
                      coachNo: values.coachNo,
                      seatNo: "Buy it First ",
                      fare: values.fare,
                      postedBy: "some user"
                    };
                    handleSubmit(data);
                    actions.setSubmitting(false);
                  }}
                  validationSchema={newTicketSchema}
                  >
                  {(formikprops) => {
                    return (
                      <Form onSubmit={formikprops.handleSubmit}>
                        <div className="input-cell">
                          <div className="before-field">
                            <Field
                              name="from"
                              id="from"
                              type="text"
                              placeholder="From Station"
                              className="input-field"
                            />
                            <div className="error-message">
                              <ErrorMessage name="from" />
                            </div>
                          </div>
                          <div className="before-field">
                            <Field
                              name="to"
                              id="to"
                              type="text"
                              placeholder="To Station"
                              className="input-field"
                            />
                            <div className="error-message">
                              <ErrorMessage name="to" />
                            </div>
                          </div>
                        </div>
                        <div className="input-cell">
                          <div className="before-field">
                            <Field
                              name="date"
                              id="date"
                              type="date"
                              placeholder="Journey Date"
                              className="input-field"
                            />
                            <div className="error-message">
                              <ErrorMessage name="date" />
                            </div>
                          </div>
                          <div className="before-field">
                            <Field
                              name="time"
                              id="time"
                              type="time"
                              placeholder="Time"
                              className="input-field"
                            />
                            <div className="error-message">
                              <ErrorMessage name="time" />
                            </div>
                          </div>
                        </div>
                        <div className="input-cell">
                          <div className="before-field">
                            <Field
                              name="trainName"
                              id="trainName"
                              type="text"
                              placeholder="Train Name"
                              className="input-field"
                            />
                            <div className="error-message">
                              <ErrorMessage name="trainName" />
                            </div>
                          </div>
                          <div className="before-field">
                            <Field
                              name="ticketClass"
                              id="ticketClass"
                              type="text"
                              placeholder="Ticket Class"
                              className="input-field"
                            />
                            <div className="error-message">
                              <ErrorMessage name="ticketClass" />
                            </div>
                          </div>
                        </div>
                        <div className="input-cell">
                          <div className="before-field">
                            <Field
                              name="coachNo"
                              id="coachNo"
                              type="text"
                              placeholder="Coach No"
                              className="input-field"
                            />
                            <div className="error-message">
                              <ErrorMessage name="coachNo" />
                            </div>
                          </div>
                          <div className="before-field">
                            <Field
                              name="fare"
                              id="fare"
                              type="text"
                              placeholder="Ticket Fare"
                              className="input-field"
                            />
                            <div className="error-message">
                              <ErrorMessage name="fare" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <button
                            className="submit-button"
                            type="submit"
                            name="save">
                            Post to Sell
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellTicketComp;
