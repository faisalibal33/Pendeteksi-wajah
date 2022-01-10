import React from "react";
import './Logo.css';
import Logos from './Logo.png';

const Logo = () => {
  return(   
    <div className="tilt-box-wrap ma4 mt0">
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>		
      <div className="tilt-box shadow-5">
        <img src={Logos} alt="Logo"/>
      </div>
    </div>
  )     
}

export default Logo;
