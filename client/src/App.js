// client/src/components/App.js
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Coffee from "./pages/Coffee"
import Login from "./pages/Login"
// import CreateUser from ".pages/CreateUser";
import Logout from "./pages/Logout"
import Partner from "./pages/Partner"
import ErrorPage from "./pages/ErrorPage"
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


function App() {

  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return <h2>Welcome, {user.username}!</h2>;
  } 
  else {
    // return <Login onLogin={setUser} />;
  }

  

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

 

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
            {/* <Route path="/testing" />   */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} onLogin={setUser}/>
            <Route path="/logout" element={<Logout />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="*" element={<ErrorPage />} />             
        </Routes>  
      </div>
    </>
  );
}

export default App;







//Keeps user logged in
  // useEffect(() => {
  //   fetch("/authorized_user").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setIsAuthenticated(true);
  //         setUser(user);
  //       });
  //     }
  //   })
  // }, [])

  //   if (user) {
  //   return <h2>Welcome, {user.username}! </h2>
  // }
  // (!isAuthenticated) 
  // else {
  //   <Login error={'Please login!'} onLogin={setUser} setIsAuthenticated={setIsAuthenticated} />
  // }



  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);


// function handleLogin() {
  //   setUser(user);
  // }

  // function handleLogout() {
  //   setUser(null);
  //   setLoggedIn(false);
  // }




















// <Navbar onLogout={handleLogout} />
// <Route path="/login" element={<Login />} handleLogin={handleLogin} setUser={setUser} setIsAuthenticated={setIsAuthenticated} { user ? <Redirect to={''} /> : <Redirect to={'/login'} />}/>
// <Route path="/create-account" element={<CreateUser />} setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
//

// kept testing route not sure what to do with yet

//still need to make a route for the logout or
//just have it go back to the login 

//  {/* <Route path="/login" element={<Login />} /> */}
//  {/* <Route path="/Logout" element={<Logout />} /> */}

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
