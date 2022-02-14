import React from 'react'

import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
        <div className="container">
            <NavLink to="/" className='navbar-brand'>Redux Toolkit Examples</NavLink>

            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><NavLink activeClassName={'active'} to="/counter" className='nav-link'>Counter</NavLink></li>
                    <li className='nav-item'><NavLink activeClassName={'active'} to="/input" className='nav-link'>Input</NavLink></li>
                    <li className='nav-item'><NavLink activeClassName={'active'} to="/users" className='nav-link'>Users Server</NavLink></li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar