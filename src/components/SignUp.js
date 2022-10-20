import { Field, Form, Formik } from "formik";
// import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("First name is required")
    .min(3, "Name should be greater than 3 letters")
    .max(30, "Name can not be greater than 30 letters"),

  lastname: Yup.string()
    .min(3, "Last should be greater than 3 letters")
    .max(30, "Last can not be greater than 30 letters"),

  username: Yup.string("Email type invalid")
    .email("Email name is required")
    .required("Email is required"),

  password: Yup.string()
    // .password("First name is required")
    .required("Password is required")
    .max(12, "Password can not be greater than 12 letters")
    .min(6, "Password can not be less than 6 letters"),
});

const SignUp = () => {
  const [initialFormValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const handleFormSubmit = async (values) => {
    console.log(values)
  };

  function clickButton() {
    console.log()
  }

  return (
    <>
      <h1>Great!! Lets SignUp</h1>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}>

        {({ errors, touched }) => (
          <Form>
            <div>
              <label>First Name</label>
              <Field name="firstname"></Field>
              {errors.firstname && touched.firstname ? (
                <div className="red"> {errors.firstname}</div>
              ) : null}
            </div>

            <div>
              <label>Last Name</label>
              <Field name="lastname"></Field>
              {errors.lastname && touched.lastname ? (
                <div className="red"> {errors.lastname}</div>
              ) : null}
            </div>

            <div>
              <label>Email</label>
              <Field type="email" name="username"></Field>
              {errors.username && touched.username ? (
                <div className="red"> {errors.username}</div>
              ) : null}
            </div>
            <div>
              <label>Password</label>
              <Field type="password " name="password"></Field>
              {errors.password && touched.password ? (
                <div className="red"> {errors.password}</div>
              ) : null}
            </div>
            <div>
              <button onClick={clickButton()} className="buttonStyleLogin" type="submit">
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
