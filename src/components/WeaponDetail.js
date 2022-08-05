import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../style.css"
import Loading from './Loading'
import WeaponDamage from './WeaponDamage';
import WeaponStats from './WeaponStats'
import NoFoundPage from './NoFoundPage'

const WeaponDetail = ({ setLoading, loading, setResponse, response }) => {

    const id = useParams()
    const [weapon, setweapon] = useState({})
    useEffect(() => {
        setLoading(true)
        axios.get(`https://valorant-api.com/v1/weapons/${id.id}`).then(res => {
            if (res.data.status === 200) {
                setweapon(res.data.data)
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

    document.querySelector('title').textContent = weapon.displayName

    if (loading) {
        return <Loading />
    }

    else {
        if (response) {
            if (weapon.weaponStats != null) {
                return (
                    <section className='bg-image detail-bg  d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
                        <div className="container" style={{ width: '44rem', marginTop: '-100px' }}>
                            <div className='text-center'><img className="card-img-top" style={{ width: 'auto', marginTop: '150px' }} src={weapon.displayIcon} alt="-weapon-" /></div>
                            <div className="card-body text-center">
                                <h4 className="card-title mt-3">{weapon.displayName}</h4>
                                <h5 className="card-title mt-2">Category: {weapon.shopData.category}</h5>
                                <h5 className="card-title mt-2">Cost: {weapon.shopData.cost} credits</h5>
                                <div className="row">

                                    <div className="col-md-6 mt-4">
                                        {weapon.weaponStats.damageRanges.map((item, index) => {
                                            return <WeaponDamage key={index} item={item} />
                                        })}
                                    </div>

                                    <WeaponStats weapon={weapon} />

                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
            else {
                return (
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
                        <div><img src={weapon.displayIcon} alt="" /></div>
                        <h4 className='mt-2'>{weapon.displayName}</h4>
                        <div className='mt-5'>There is no stat data for {weapon.displayName}</div>
                    </div>
                )
            }
        }

        else {
            return <NoFoundPage />
        }
    }


}

export default WeaponDetail