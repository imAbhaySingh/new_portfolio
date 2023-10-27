import React from 'react'
import "./navbar.css";
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactimg from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} duration={600} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} duration={600} offset={-100} className="desktopMenuListItem">Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={1000} className="desktopMenuListItem">Contact</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactimg} alt="" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
  )
}

export default Navbar