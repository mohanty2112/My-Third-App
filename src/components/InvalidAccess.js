import React from "react"
import { useNavigate } from "react-router-dom";

function InvalidAccess() {
    const navigate = useNavigate();
    const loginPage = () => {
        navigate('/Login', true)
    }

return (
    <>
    <h1 className="NotFound">Invalid Creds</h1>
    <p>Click below to login again</p>
    <button className="buttonStyle" onClick={loginPage}>Click Me</button>
    </>
)

}

export default InvalidAccess;