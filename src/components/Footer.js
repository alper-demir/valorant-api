import React from 'react'

const Footer = () => {
    return (
        <footer className='d-flex flex-column justify-content-center align-items-center' style={{ background: '#317368', height: '70px', color: '#fff' }}>
            <div>
                Valorant-API
            </div>
            <div><a target={'blank'} className='navbar-brand' href="https://valorant-api.com/"><strong>Source</strong></a></div>
        </footer>
    )
}

export default Footer