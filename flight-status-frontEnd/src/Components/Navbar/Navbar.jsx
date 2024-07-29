import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlane } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>Flight Companion <FontAwesomeIcon icon={faPlane} size="sm" style={{color: "#000099",}} /> </div>
            <ul className='nav-menu'>
                <Link to='/' className='link-sty'>Home</Link>
                <Link to='/Notification' className='link-sty'>Notification</Link>
                <Link to='/Status' className='nav-contact'>Flight Status</Link>   
            </ul>
        </div>
    )
}

export default Navbar;