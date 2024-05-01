// components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faImage, faEnvelope, faInfo } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className='navbar'>
                <div className='navbar-toggle' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={`nav-links ${showMenu ? 'active' : 'offline'}`}>
                    <Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link>
                    <Link to='/gallery'><FontAwesomeIcon icon={faImage} /> Gallery</Link>
                    <Link to='/contact'><FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
                    <Link to='/about'><FontAwesomeIcon icon={faInfo} /> About</Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
