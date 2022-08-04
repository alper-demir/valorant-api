import React from 'react'
import bg from "../home-bg.jpg"
import "../style.css"

const Agents = () => {

    document.querySelector('title').textContent = 'Valorant App Home'


    return (
        <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', backgroundImage: `url(${bg})` }}>
            <div className="text container d-flex justify-content-center align-items-center" style={{ height: '%60' }}>
                <p className='text-center' style={{ color: '#fff', fontSize: '24px' }}>
                    Valorant is a free-to-play multiplayer tactical first-person shooter video game developed and published by Riot Games. First released under the codename Project A in October 2019, the game began its closed beta period with limited access on April 7, 2020, and then officially released on June 2, 2020.
                </p>
            </div>
        </div>
    )
}

export default Agents