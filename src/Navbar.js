import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='header'>
            <nav className='nav container'>
                <NavLink to="/" className="nav__title">
                    BandMates
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;