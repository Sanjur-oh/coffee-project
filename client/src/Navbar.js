import logo from "./logo.jpeg";
import { Link } from "react-router-dom";
// import {FaBars, FaTimes} from 'react-icons/fa'
// import { useEffect, useImperativeHandle } from "react";

function Navbar({ onLogout }) {
  // function handleClick(){
  //     fetch('/cookie_click')
  //     .then(res => res.json())
  //     .then(console.log)
  // }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <nav className="nav">
      <ul>
        {/* <li className="active">
                <Link to="/cookie_click" onClick={handleClick}> click </Link>
                </li> */}

        <Link to="/" className="site-title">
          {" "}
          Tweek Bros{" "}
        </Link>
        <li className="active">
          <Link to="/coffee"> Coffees </Link>
        </li>

        <li className="active">
          <Link to="/partner"> Partners </Link>
        </li>
      </ul>

      <ul>
        {/* <Link to="/"><img src={logo} alt="Tweek Coffee" /></Link> */}
        <img src={logo} alt="Tweek Coffee" />
      </ul>

      <ul>
        <li className="active">
          <Link to="/profile"> Profile </Link>
        </li>
        <li className="active">
          <Link to="/" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </Link>
          
        </li>
      </ul>
      {/* <div className="hamburger">
                <FaBars />
            </div> */}
    </nav>
  );
}

export default Navbar;






// stretch will not have About for a moment

// <li>
//     <a href="/about">About</a>
// </li>
