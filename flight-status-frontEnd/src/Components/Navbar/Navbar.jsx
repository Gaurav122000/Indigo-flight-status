import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlane } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>Flight Companion <FontAwesomeIcon icon={faPlane} size="sm" style={{color: "#000099",}} /> </div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li><Link to='/Status'>Flight Status</Link></li>
                <li>Notification</li>
                <li className='nav-contact'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;