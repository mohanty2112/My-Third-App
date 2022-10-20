import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    const loginPage = () => {
      navigate("/Login", true);
    };
return (
    <>
    <h1 className="NotFound">Page Not Found</h1>
    <p>Click below to go to Login Page</p>
      <button className="buttonStyle" onClick={loginPage}>Click Me</button>
    </>
)

};

export default NotFound;