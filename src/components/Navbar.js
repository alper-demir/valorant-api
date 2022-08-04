import React from 'react'
import "../style.css"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='navbar navbar-dark' style={{ height: '60px', background: '#6e1d4a' }}>
            <div className="container d-flex justify-content-between">

                <NavLink to="/" className="navbar-brand">Valorant App</NavLink>
                <div className='d-flex '>
                    <div className='d-flex nav-links' style={{ marginRight: '20px' }}>
                        <NavLink to="/agents" className="navbar-brand mx-2">Agents</NavLink>
                        <NavLink to="/weapons" className="navbar-brand mx-2">Weapons</NavLink>
                        <NavLink to="/maps" className="navbar-brand mx-2">Maps</NavLink>
                    </div>
                    <div className="socials d-flex align-items-center" style={{ color: '#fff', marginTop: '4px' }}>
                        <a target={'blank'} href="https://www.instagram.com/valoranttr/"><i className="fa-brands fa-instagram mx-2" style={{ color: '#fff' }}></i></a>
                        <a target={'blank'} href="https://twitter.com/playvalorant/"><i className="fa-brands fa-twitter mx-2" style={{ color: '#fff' }}></i></a>
                        <a target={'blank'} href="https://www.youtube.com/c/PlayVALORANT"><i className="fa-brands fa-youtube mx-2" style={{ color: '#fff' }}></i></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar