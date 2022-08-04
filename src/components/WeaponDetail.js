import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../style.css"

const WeaponDetail = () => {

    const id = useParams()
    const [weapon, setweapon] = useState({})
    useEffect(() => {
        axios.get(`https://valorant-api.com/v1/weapons/${id.id}`).then(res => {
            setweapon(res.data.data)
            console.log(res.data.data)
        })
    }, [id])

    document.querySelector('title').textContent = weapon.displayName


    return (
        weapon.uuid === id.id &&
        <section className='bg-image detail-bg  d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            <div className="container" style={{ width: '44rem', marginTop: '-100px' }}>
                <div className='text-center'><img className="card-img-top" style={{ marginRight: 'auto', width: 'auto', marginTop: '150px' }} src={weapon.displayIcon} alt="-weapon-" /></div>
                <div className="card-body text-center">
                    <h4 className="card-title mt-3">{weapon.displayName}</h4>
                    <h5 className="card-title mt-2">Category: {weapon.shopData.category}</h5>
                    <h5 className="card-title mt-2">Cost: {weapon.shopData.cost} credits</h5>
                    {/* <h5 className="text-center card-title mt-2">Total number of skins:  </h5> */}
                    <div className="row">

                        <div className="col-md-6 mt-4">

                            {weapon.weaponStats.damageRanges.map((item, index) =>
                            (
                                <div key={index}>
                                    <div className='mt-2' style={{ background: "#a7abab", padding: '5px', borderRadius: '5px' }}>
                                        <div className="card-body">
                                            <h6 className='text-center mt-1' style={{ color: '#fff' }}>Range: {item.rangeStartMeters}m - {item.rangeEndMeters}m</h6>
                                            <table className="table text-center mt-1">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Leg</th>
                                                        <th>Body</th>
                                                        <th>Head</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Damage:</th>
                                                        <td>{Math.round(item.legDamage)}</td>
                                                        <td>{Math.round(item.bodyDamage)}</td>
                                                        <td>{Math.round(item.headDamage)}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                        </div>

                        <div className="col-md-6 mt-4 text-center">
                            <div className="card mt-2" style={{ background: '#a7abab' }}>
                                <h5 className="card-title mt-3" style={{ color: '#fff' }} > Stats</h5>
                                <div className="card-body">
                                    <div>Fire Rate: <strong>{weapon.weaponStats.fireRate}</strong></div>
                                    <div className='mt-2'>First Bullet Accuracy: <strong>{weapon.weaponStats.firstBulletAccuracy}</strong></div>
                                    <div className='mt-2'>Magazine Size: <strong>{weapon.weaponStats.magazineSize}</strong></div>
                                    <div className='mt-2'>Reload Time Seconds: <strong>{weapon.weaponStats.reloadTimeSeconds}</strong></div>
                                    <div className='mt-2'>Run Speed Multiplier: <strong>{weapon.weaponStats.runSpeedMultiplier}</strong></div>
                                    <div className='mt-2'>Shotgun Pellet Count: <strong>{weapon.weaponStats.shotgunPelletCount}</strong></div>
                                </div>
                            </div>
                        </div>

                        <h4 className='text-center mt-5'>{weapon.uuid === id.id && weapon.skins.length} skin is available for {weapon.displayName}</h4>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeaponDetail