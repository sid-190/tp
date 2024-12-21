import React from 'react';
import './NavBar.scss';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const signUp = () => {
        navigate(`/`);
      };
    
      const logIn = () => {
        navigate(`/`);
      };

      const aboutUs = () => {
        navigate(`/AboutUs`);
      };
    
      const counselor = () => {
        navigate(`/Counselor`);
      };

      const contactUs = () => {
        navigate(`/ContactPage`);
      };

      const rateUs = () => {
        navigate(`/FeedbackPage`);
      };

  return (
    <div className="navbar">
        <div className="nav-logo border">
          <div className="logo">
            CONSULTIFY
          </div>
        </div>
        <div className="nav-about border">
          <div className="add-icon">
            <a onClick={aboutUs}>About Us</a>
          </div>
        </div>
        <div className="nav-counsellor border">
          <a onClick={counselor}>Our Counsellors</a>
        </div>
        <div className="nav-contact border">
          <p className="nav-second">
            <a onClick={contactUs}>Contact Us</a>
          </p>
        </div>
        <div className="nav-session border">
          <a onClick={rateUs}>Rate Us</a>
        </div>
        <div className='button-main'>
        <div className="button">
          <div className="nav-signup border">
            <button onClick={signUp}>Sign Up</button>
          </div>
        </div>
        <div className="button">
          <div className="nav-login border">
            <button onClick={logIn}>Log In</button>
          </div>
        </div>
        </div>
</div>
  )
}

export default NavBar

