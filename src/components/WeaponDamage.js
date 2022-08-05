import React from 'react'

const WeaponDamage = ({ item }) => {
    return (
        <div>
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
}

export default WeaponDamage