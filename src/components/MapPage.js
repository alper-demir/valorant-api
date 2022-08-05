import React from 'react'

const MapPage = ({ map }) => {
    return (
        <div className="col-md-4">
            <div className="card mt-3">
                <img src={map.splash} alt="" />
                <div className="card-body text-center">
                    <h4 className='card-titler'> {map.displayName} </h4>
                    {map.callouts ? <span className='text-center'>{map.callouts.length} map callouts registered for {map.displayName}</span> : <>There is no map callouts register</>}
                </div>
                <div className="card-footer">Coordinates: {map.coordinates} </div>
            </div>

        </div>
    )
}

export default MapPage