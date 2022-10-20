import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logCred from "./loginCred.json";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email } = formData;
  const { password } = formData;
  // console.log(...formData)
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target[0].value)
    setFormData({ ...formData, [name]: value });
    // console.log(formData)
  };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e)
    // const {name, value} = e.target;
    // console.log(e.target[0].value)

    if (email === logCred.uName && password === logCred.password) {
      navigate("/Loginsuccess", true);
    } else {
      navigate("/InvalidAccess", true);
    }
  }

  return (
    <>
      <h1>This is Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Email">Enter Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
          {/* value={uName} */}
          <br></br>
        </div>
        <div>
          <label htmlFor="password">Enter Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>

          <br></br>
          <br></br>
          <br></br>
        </div>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default Login;
