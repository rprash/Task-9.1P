import React from 'react';
import fb from '../img/facebook-icon.jpg';
import insta from '../img/insta.png';
import twitter from '../img/twitter.png';
import '../App.css';

const Footer = () => {
    return <footer>
        <div className="newsletter-div">
            <h3 className="newsletter-heading">Newsletter sign</h3>
            <input className="newsletter-input" type="text" />
            <button className="newsletter-button">Subscribe</button>
        </div>
        <div className="icons-div">
            <h3 className="icons-heading">
                Connect us
             </h3>
            <div className="icons-img-div">
                <img src={fb} alt="" className="icon-img" />
                <img src={twitter} alt="" className="icon-img" />
                <img src={insta} alt="" className="icon-img" />
            </div>
        </div>
    </footer>;
}

export default Footer;