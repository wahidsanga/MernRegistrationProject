import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
   return (
    <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <a href="/">MERN Registration APP</a>
                </div>

                <nav>
                    <ul>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/service">Services</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    </>
   ) 
};