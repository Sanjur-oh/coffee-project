import logo from "./logo.jpeg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import { useImperativeHandle } from "react";

export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                    <Link to="/" className="site-title">Tweek Bros</Link> 
                {/* <li className="active">
                    <CustomLink to="/login">Login</CustomLink>
                </li> */}
            </ul>

            <ul>
                <img src={logo} alt="Tweek Coffee" />
            </ul>
                    
            <ul>
                <li className="active">
                    <CustomLink to="/coffee">Coffees</CustomLink>
                </li>

                {/* <li className="active">
                    <CustomLink to="/logout">Logout</CustomLink>
                </li> */}

                <li className="active">
                    <CustomLink to="/partner">Partners</CustomLink>
                </li>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}            
            </Link>
        </li>
    )
}


            // stretch will not have About for a moment

            // <li>
            //     <a href="/about">About</a>
            // </li>



