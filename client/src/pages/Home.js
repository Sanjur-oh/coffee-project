import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import CreateUser from './CreateUser';

function Home({ handleLogin, setUser, setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function refreshPage() {
        window.location.reload(false);
      }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log("hey");
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                setUser(user)
                setIsAuthenticated(true) 
                refreshPage()               
              })
              
            } else {
              res.json()
              .then(json => setError(json.error))
            }
          })
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome</h1>
                <h2>Here at Tweek Bros we believe in only one thing, making a great cup of coffee!</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label> Password </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button className='nav-button'>Sign In</button>
                    </div>
                </form>
            <div>
                <p> Don't have an account? </p>
                <Link to="/create-account">
                    <button className='nav-button' type="button">Create One!</button>
                </Link>
            </div>
            </header>
            {error?<div>{error}</div>:null}

        </div>
    );
}
export default Home;


// function Home() {
//     return ( 
//         <>
//         <h1>Home</h1>
        
//         <h2>Here at Tweek Bros we believe in only one thing, making a great cup of coffee!</h2>
//         </>
//     )
// }

// export default Home


