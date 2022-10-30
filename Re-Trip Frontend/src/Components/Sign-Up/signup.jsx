import { Link } from "react-router-dom";
import "../../Styles/Authentication/signUp.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import signUpSchema from '../schemas/signUp'
import { signUpUser } from "../../APIs/rest";
const SignUpComponent = () => {
  const handleSubmit = (data) => {
    signUpUser(data);
  };
  return (
    <div>
      <div className="hero">
        <div className="content">
          <div className="main">
            <div className="signup">
              <label for="chk" aria-hidden="true">
                Sign Up
              </label>
              <Formik
                initialValues={{
                  fullName: "",
                  nid: "",
                  phone: "",
                  email: "",
                  password: "",
                }}
                onSubmit={(values, actions) => {
                  const data = {
                    fullName: values.fullName,
                    nid: values.nid,
                    phone: values.phone,
                    email: values.email,
                    password: values.password,
                  };
                  handleSubmit(data);
                  actions.setSubmitting(false);
                }}
                validationSchema={signUpSchema}>
                {(formikprops) => {
                  return (
                    <Form onSubmit={formikprops.handleSubmit}>
                      <div>
                        <div>
                          <Field
                            name="fullName"
                            id="fullName"
                            type="text"
                            placeholder="Full Name"
                            className="input"
                          />
                          <div className="error-message">
                            <ErrorMessage name="fullName" />
                          </div>
                        </div>
                        <div>
                          <Field
                            name="nid"
                            id="nid"
                            type="text"
                            placeholder="NID Number"
                            className=""
                          />
                          <div className="error-message">
                            <ErrorMessage name="nid" />
                          </div>
                        </div>
                        <div>
                          <Field
                            name="phone"
                            id="phone"
                            type="text"
                            placeholder="Phone Number"
                            className=""
                          />
                          <div className="error-message">
                            <ErrorMessage name="phone" />
                          </div>
                        </div>
                        <div>
                          <Field
                            name="email"
                            id="email"
                            type="text"
                            placeholder="Email"
                            className=""
                          />
                          <div className="error-message">
                            <ErrorMessage name="email" />
                          </div>
                        </div>
                        <div>
                          <Field
                            name="password"
                            id="password"
                            type="password"
                            placeholder="password"
                            className=""
                          />
                          <div className="error-message">
                            <ErrorMessage name="password" />
                          </div>
                        </div>
                        <button className="auth-btn" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>

            <Link to="/sign-in">
              <div className="login">
                <div>
                  <label for="chk" aria-hidden="true">
                    Sign In Instead
                  </label>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
