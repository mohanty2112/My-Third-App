import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const loginPage = () => {
    navigate("/Login", true);
  };

  const Signup = () => {
    navigate("/Signup", true);
  };

  return (
    <>
      <h1>Welcome to our page </h1>
      <p>Click below to go to Login Page</p>
      <button className="buttonStyle" onClick={loginPage}>
        Click Me
      </button>
      click below to SignUp
      <button className="buttonStyle" onClick={Signup}>
        Click Me
      </button>
    </>
  );
};

export default Home;
