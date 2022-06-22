// client/src/components/App.js
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Login from "./pages/Login"
// import Logout from "./pages/Logout"
import Cart from "./pages/Cart"
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
            {/* <Route path="/testing" />   */}
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/Logout" element={<Logout />} /> */}
        </Routes>  
      </div>
    </>
  );
}

export default App;


// kept testing route not sure what to do with yet

//still need to make a route for the logout or
//just have it go back to the login 