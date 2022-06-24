import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import CreateUser from './CreateUser';

function Home({ handleLogin, setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [submitted, setSubmitted] = useState(false)


  function refreshPage() {
    window.location.reload(false);
  }

  // Handling the email change
  const handleNewEmail = (e) => {
    setNewEmail(e.target.value);
    setSubmitted(false);
};

  // Handling the password change
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
    setSubmitted(false);
};

const handlePassConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
    setSubmitted(false);
};

const handleNewUsername = (e) => {
    setNewUsername(e.target.value);
    setSubmitted(false);
};



  function handleSubmit(e) {
    e.preventDefault();
    // console.log("hey");
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
          refreshPage();
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  }


  const handleNewUser = (e) => {
    e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: newUsername,
                email: newEmail,
                password: newPassword,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => 
           { if(res.ok) {
               res.json()
               .then(user => setNewUsername(user))
               return res.json().then(body => setNewUsername(body))
            }})

        if (newUsername === '' || newEmail === '' || newPassword === '') {
            e.preventDefault();
            setError(true);
            
        } else {
            setSubmitted(true);
            refreshPage();
            setError(false);
        }
    };

  // Showing success message
  const successMessage = () => {
    return (
        <div
            className="success"
            style={{
                display: submitted ? '' : 'none',
            }}>
            <h1>User {newUsername} successfully registered!!</h1>
        </div>
    );
};

  // Showing error message if error is true
  const errorMessage = () => {
    return (
        <div
            className="error"
            style={{
                display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
        </div>
    );
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <h2>
          Here at Tweek Bros we believe in only one thing, making a great cup of
          coffee!
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label> Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="nav-button">Sign In</button>
          </div>
        </form>
        <div>
              {errorMessage()}
              {successMessage()}
        </div>
        <div>
          <p> Don't have an account? </p>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email </label>
                <input
                  type="text"
                  name="email"
                  value={newEmail}
                  onChange={handleNewEmail}
                  required
                />
                <br></br>
                <label>Username </label>
                <input
                  type="text"
                  name="username"
                  value={newUsername}
                  onChange={handleNewUsername}
                  required
                />
                <br></br>
                <label>Create Password: </label>
                <input
                  type="password"
                  name="password"
                  value={newPassword}
                  onChange={handleNewPassword}
                  required
                />
                <br></br>
                <label>Confirm Password: </label>
                <input
                  type="password"
                  name="password"
                  value={passwordConfirmation}
                  onChange={handlePassConfirmation}
                  required
                />
              </div>
              <div>
                <button className="nav-button" onClick={handleNewUser}>
                  {" "}
                  Create New Account!{" "}
                </button>
              </div>
            </form>
        </div>
      </header>
      {error ? <div>{error}</div> : null}
    </div>
  );
}
export default Home;

// {/* <Link to="/">
//             <button className="nav-button" type="button">
//               Create One!
//             </button>
//           </Link> */}

// function Home() {
//     return (
//         <>
//         <h1>Home</h1>

//         <h2>Here at Tweek Bros we believe in only one thing, making a great cup of coffee!</h2>
//         </>
//     )
// }

// export default Home

// import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// // import CreateUser from './CreateUser';

// function Home({ handleLogin, setUser, setIsAuthenticated }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   function refreshPage() {
//     window.location.reload(false);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     // console.log("hey");
//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     }).then((res) => {
//       if (res.ok) {
//         res.json().then((user) => {
//           setUser(user);
//           setIsAuthenticated(true);
//           refreshPage();
//         });
//       } else {
//         res.json().then((json) => setError(json.error));
//       }
//     });
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome</h1>
//         <h2>
//           Here at Tweek Bros we believe in only one thing, making a great cup of
//           coffee!
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Username </label>
//             <input
//               type="text"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label> Password </label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <button className="nav-button">Sign In</button>
//           </div>
//         </form>

//         <div>
//           <p> Don't have an account? </p>
//           <form onSubmit={handleSubmit}>
//             <div>

//               <label> Confirm Password </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button className="nav-button" type="button">
//               Create One!
//             </button>
//           </form>
//         </div>
//       </header>
//       {error ? <div>{error}</div> : null}
//     </div>
//   );
// }
// export default Home;
