import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaHotel } from "react-icons/fa";

import './Navbar.css'

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <FaHotel className="menu-icon-hotel" />
                </Link>


                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes className="menu-icon-times" /> : <FaBars className="menu-icon-bars" />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/rooms' className="nav-links" onClick={closeMobileMenu}>
                            Rooms
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about-us' className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/sign-up' className="nav-links navbtn" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-in' className="nav-links navbtn" onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
    );

    // state = {
    //   isOpen: false,
    // };

    // handleToggle = () => {
    //   this.setState({ isOpen: !this.state.isOpen });
    // };

    // <nav className="navbar">
    //   <div className="nav-center">
    //     <div className="nav-header">
    //       <Link className="logo" to="/">
    //         {/* <img src={logo} alt="HotelRoom.com" /> */}
    //         <span>TravelRooms.com</span>
    //       </Link>

    //       <button
    //         type="button"
    //         className="nav-btn"
    //         onClick={this.handleToggle}
    //       >
    //         <FaAlignRight className="nav-icon" />
    //       </button>
    //     </div>


    //     <div className="nav-container">
    //       <ul
    //         className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
    //       >
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/rooms">Rooms</Link>
    //         </li>
    //         <li>
    //           <Link to='/reservations'>Reservations</Link>
    //         </li>
    //       </ul>

    //     </div>

    //   </div>
    // </nav>

};



