
import { Link } from "react-router-dom";
import "../../Styles/Authentication/signIn.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import signInSchema from '../schemas/signIn'
import {signInUser} from '../../APIs/rest'

const SignInComponent = () => {
    const handleSubmit = (data) => {
      signInUser(data);
    };
  return (
    <div>
      <div className="hero">
        <div className="content">
          <div className="main-segment">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
              <div>
                <label for="chk" aria-hidden="true">
                  Sign In
                </label>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={(values, actions) => {
                    const data = {
                      email: values.email,
                      password: values.password
                    };
                    handleSubmit(data);
                    actions.setSubmitting(false);
                  }}
                  validationSchema={signInSchema}>
                  {(formikprops) => {
                    return (
                      <Form onSubmit={formikprops.handleSubmit}>
                        <div>
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
                              placeholder="Password"
                              className=""
                            />
                            <div className="error-message">
                              <ErrorMessage name="password" />
                            </div>
                          </div>
                          <button className="auth-btn" type="submit">
                            Sign In
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <Link to="/sign-up">
              <div className="login">
                <div>
                  <label for="chk" aria-hidden="true">
                    Sign Up Instead
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

export default SignInComponent;
