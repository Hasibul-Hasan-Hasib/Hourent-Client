import { User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="fixed min-w-screen bg-base-100 border-b-2 border-b-gray-200 z-10">
            <div className='navbar container mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to="properties">Properties</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Hourent</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="properties">Properties</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link to='/login' class="btn"><User size={18}></User> Sign In</Link>
                    <button class="btn btn-primary">List Property</button>
                </div>
            </div>
        </div>
    );
};

export default Header;