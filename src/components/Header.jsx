import React from 'react';
import ham from '../img/Hamburger_icon.png';
import slider from '../img/slider.png'
import '../App.css';

const Header = ({ heading, links }) => {
    return <header>
        <nav className="navbar">
            <div className="hamburger-div">
                <img src={ham} alt="" />
            </div>
            <div className="logo-div">
                {heading}
            </div>
            <div className="navigation-div">
                <a href className="nav-item"> How it Works </a>
                <a href className="nav-item"> Requesters </a>
                <a href className="nav-item"> Workers </a>
                <a href className="nav-item"> Pricing </a>
                <a href className="nav-item"> About </a>
            </div>
            <div className="sign-up-button-div">
                <button className="sign-up-button">Sign Up</button>
            </div>
        </nav>
        <div className="slider">
            <img src={slider} alt="" />
        </div>
    </header>;
}

export default Header;