// import React from 'react'
import footerStyle from './Footer.module.css'
import logo from '../../assets/Image/10001.png'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
    <div className={footerStyle.container}>
        <div className={footerStyle.row}>
            <div className={footerStyle.logoImage}>
                
                <a href="">
                    <img src={logo} alt="Logo Image" />
                </a>
                {/* </Link> */}
            </div>
            <div className={footerStyle.footerCol}>
                {/* <h2>Our Company</h2> */}
                <span >
                        <ul>
                            <li><h2>Our company</h2></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Get a Quote</a></li>
                            <li><a href="">Our Service</a></li>
                            <li><a href="">Fab Class</a></li>
                        </ul>
                </span>
            </div>
            <div className={footerStyle.footerCol}>
                {/* <h2>Get In Touch</h2> */}
               <span>
                    <ul>
                        <li><h2>Get In Touch</h2></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
               </span>
                
            </div>
            <div className={footerStyle.footerCol}>
                <ul>
                    <li><h2>Contact Info</h2></li>
                    <li><p>44 KG 548 St, Kigali</p></li>
                    <li><p>+250-789-276-080</p></li>
                </ul>
            </div>
        </div>
        <div className={footerStyle.footerChildTwo}>
            <div>
                <p>Copyright © 2022 FABLAB RWANDA</p>
            </div>
            <div>
                <p>Designed By Klab</p>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer