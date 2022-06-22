// client/src/components/App.js
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Coffee from "./pages/Coffee"
// import Login from "./pages/Login"
// import Logout from "./pages/Logout"
import Partner from "./pages/Partner"
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


function App() {

  const [count, setCount] = useState(0);
  // const [coffees, setCoffees] = useState([])

  // const fetchData = () => {
  //   fetch("/coffees")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setCoffees(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])


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
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/partner" element={<Partner />} />           
        </Routes>  
      </div>
    </>
  );
}

export default App;


// kept testing route not sure what to do with yet

//still need to make a route for the logout or
//just have it go back to the login 

//  {/* <Route path="/login" element={<Login />} /> */}
//  {/* <Route path="/Logout" element={<Logout />} /> */}
