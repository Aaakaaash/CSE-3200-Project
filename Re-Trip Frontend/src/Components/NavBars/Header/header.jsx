

import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import { BsTagsFill } from "react-icons/bs";
import "../../../Styles/Header/header.css";
const Header = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
      <div className="navbar">
        <div className="container">
          <h1>
            <span>
              <BsTagsFill />
              Re-
            </span>
            TRIP
          </h1>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sell-ticket">Sell Tickets</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <Link to="/sign-in">
            <button className="btn">Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className="btn">Sign Up</button>
          </Link>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaRegTimesCircle className="icon" />
            ) : (
              <HiOutlineMenuAlt4 className="icon" />
            )}
          </div>
        </div>
      </div>
    );
}

export default Header

