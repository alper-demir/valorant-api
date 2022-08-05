import React from 'react'

const WeaponStats = ({ weapon }) => {
    return (
        <>
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

            <h4 className='text-center mt-5'>{weapon.skins.length} skin is available for {weapon.displayName}</h4>
        </>

    )
}

export default WeaponStats