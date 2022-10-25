import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/favicon.png";
import './Navbar.css'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? 'dark-mode' : "light-mode"}>
            <div className="navbar bg-primary text-primary-content">
                <div className="navbar-start">

                    <div className='ml-4' >
                        <img className="w-10 rounded" src={image} alt='' />

                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/courses' className="justify-between"> Courses </Link>

                            </li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/login'>LogIn</Link></li>
                            <li><Link to='/logout'>LogOut</Link></li>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" alt='' />
                                </div>
                            </label>
                        </ul>
                    </div>



                    <Link className="btn btn-ghost normal-case text-xl"><p className='font-extrabold text-yellow-500 font-mono text-3xl italic'>Edu For ASD</p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/courses'>  Courses</Link>

                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/login'>LogIn</Link></li>
                        <li><Link to='/logout'>LogOut</Link></li>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                    </ul>
                </div>

                <div className='navbar-end'>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className='mr-2' style={{ color: darkMode ? 'gray' : 'yellow' }}>Light</span>
                            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} className="toggle toggle-secondary" />
                            <span className='ml-2' style={{ color: darkMode ? 'Black' : '#c96dfd' }} >Dark</span>
                        </label>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;