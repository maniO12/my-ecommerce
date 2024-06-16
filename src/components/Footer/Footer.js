import React from 'react'
import insta_icon from '../Assets/instagram_icon.png'
import pintrest_icon from'../Assets/pintester_icon.png'
import whatsapp_icon from'../Assets/whatsapp_icon.png'
import logo from '../Assets/logo.png';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footertop">
        <img src={logo} alt='not found'></img>
        <h5 className="main text-center">Shopper</h5>
      </div>
      <div className="list">
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
   <div className="icons">
   <img src={insta_icon} alt='not found'></img>
   <img src={pintrest_icon} alt='not found'></img>
   <img src={whatsapp_icon} alt='not found'></img>
   </div>
   <div className="copyright">
    <hr className="down"/>
    <p className="text-center">copyright @2024 -All rights reserved.</p>
   </div>
    </div>
  )
}

export default Footer
