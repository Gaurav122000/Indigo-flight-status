import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlane, faBars } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};

    return (
        <div className='nav'>
            <div className='nav-logo'>Flight Companion <FontAwesomeIcon icon={faPlane} size="sm" style={{color: "#000099",}} /> </div>
            <div className={`burger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#fff" }} />
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link to='/' className='link-sty'>Home</Link>
                <Link to='/Notification' className='link-sty'>Notification</Link>
                <Link to='/Status' className='nav-contact'>Flight Status</Link>   
            </ul>
        </div>
    )
}

export default Navbar;