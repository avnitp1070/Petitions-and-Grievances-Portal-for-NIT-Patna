import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import { app } from '../Firebase';
import './Navbar.css';

const auth = getAuth(app);

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setIsLoggedIn(false);
                toast.success("Logged Out", {
                    position: "top-center"
                });
                navigate('/login');
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    };

    return (
        <div className='navbar'>
            <NavLink to="https://www.nitp.ac.in/">
                <img src="https://www.nitp.ac.in/static/logo512-b2c623bcaf7f23d5455ed1609e8bdb01.png" alt="Logo" width={70} height={70} loading='lazy' />
            </NavLink>

            <nav>
                <ul className='nav-links'>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? 'active' : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Guide" 
                            className={({ isActive }) => isActive ? 'active' : ''}>
                            Guidelines
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/write" 
                            className={({ isActive }) => isActive ? 'active' : ''}>
                            Write
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => isActive ? 'active' : ''}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className='auth-buttons'>
                {!isLoggedIn &&
                    <>
                        <NavLink to="/login">
                            <button className='button'>Login</button>
                        </NavLink>
                        <NavLink to="/signup">
                            <button className='button'>Sign Up</button>
                        </NavLink>
                    </>
                }
                {isLoggedIn &&
                    <>
                        <button className='button' onClick={handleSignOut}>Log Out</button>
                        <NavLink to="/dashboard">
                            <button className='button'>Dashboard</button>
                        </NavLink>
                    </>
                }
            </div>
        </div>
    );
}

export default Navbar;
