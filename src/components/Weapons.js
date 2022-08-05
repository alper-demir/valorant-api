import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeaponPage from './WeaponPage';
import Loading from './Loading';
import NoFoundPage from './NoFoundPage';

const Weapons = ({ setLoading, loading, response, setResponse }) => {

    const [weapon, setWeapon] = useState([])

    document.querySelector('title').textContent = 'Weapons'


    useEffect(() => {
        setLoading(true)
        axios.get('https://valorant-api.com/v1/weapons').then(res => {

            if (res.data.status === 200) {
                setWeapon(res.data.data)
                console.log(res.data.data)
                setLoading(false)
                setResponse(true)
            }
            else {
                setLoading(false)
                setResponse(false)
            }
        })
    }, [])

    if (loading) {
        return <Loading />
    }

    else {
        if (response) {
            return (
                <div className='mb-5' style={{ minHeight: '100vh' }}>
                    {weapon.displayName}
                    <div className="container mt-4">
                        <h1 style={{ color: '#6E1D4A' }} className='text-center'>Weapons</h1>
                        <div className="row">
                            {weapon.map((weapon, index) => {
                                return <WeaponPage weapon={weapon} key={index} />
                            })}
                        </div>
                    </div>

                </div>
            )
        }

        else {
            return <NoFoundPage />
        }

    }

}

export default Weapons