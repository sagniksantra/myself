import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const navigate = useHistory();

    const logoutUser = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            toast.success("Logout successfully.");
            navigate.push("/");
          })
          .catch((error) => {
            // An error happened.
            toast.error(error.message);
          });
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);

    return (
     <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="mes-logo-small.png" alt="" />
                </Link>
                <div className="menu-icon"  onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/events'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Events
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/register'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Register
                    </Link>
                    </li>
                    <li>
                    <Link
                        to='/'
                        className='nav-links'
                        onClick={logoutUser}
                    >
                        Logout
                    </Link>
                    </li>
                    <li>
                    <Link
                        to='/login'
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                    >
                        Login
                    </Link>
                    </li>
                </ul>
                {Button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
            </div>
        </nav>
     </>
    );
}

export default Navbar
