import React from "react"
import { useNavigate } from "react-router-dom";

function InvalidAccess() {
    const navigate = useNavigate();
    const NavShelflifePage = () => {
        navigate('/Shelflife', true)
    }

return (
    <>
    <h1 className="NotFound">Login Success</h1>
    <p>Click below to calculte Shelf life</p>
    <button className="buttonStyle" onClick={NavShelflifePage}>Click Me</button>
    </>
)

}

export default InvalidAccess;