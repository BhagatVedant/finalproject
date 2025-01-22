import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';

function NavBar() {
    const [navClass, setNavClass] = useState('navbar');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setNavClass('navbar scrolled');
            else setNavClass('navbar');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={navClass}>
            <div className="navbarLogo">
                <Link to="/">Heart Of KY Kids</Link>
            </div>
            
            <ul className="navbarList">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/childcare">Childcare</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/preschool">Preschool</Link></li>
                <li><Link to="/concerns">Concerns</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;