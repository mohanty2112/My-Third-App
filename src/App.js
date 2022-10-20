// import logo from './logo.svg';
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import InvalidAccess from "./components/InvalidAccess";
import Layout from "./components/Layout";
import Loginsuccess from "./components/Loginsuccess";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Shelflife from "./components/ShelfLife";
// import updateData from "./reducer/Reducer";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

function App() {
  // const [loginState, setLoginState] = useState(false);
  

  return (
    <>
      <div>
        <Layout></Layout>
        <Routes>
          {/* //variable = {firstname} */}
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={< SignUp />} />
          <Route path="/Loginsuccess" element={<Loginsuccess />} />
          <Route path="/ShelfLife" element={<Shelflife />} />
          <Route path="/" element={<Home></Home>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/InvalidAccess" element={<InvalidAccess />} />
        </Routes>

        {/* {!loginState && <Login setLogin={setLoginState}></Login>}
    
    {loginState && <ToDoList></ToDoList>}
     */}
      </div>
    </>
  );
}

export default App;
