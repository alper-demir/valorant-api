import React from 'react'

const MapPage = (props) => {
    return (
        <div className="col-md-4">
            <div className="card mt-3">
                <img src={props.map.splash} alt="" />
                <div className="card-body text-center">
                    <h4 className='card-titler'> {props.map.displayName} </h4>
                    {props.map.callouts ? <span className='text-center'>{props.map.callouts.length} map callouts registered for {props.map.displayName}</span> : <>There is no map callouts register</>}
                </div>
                <div className="card-footer">Coordinates: {props.map.coordinates} </div>
            </div>

        </div>
    )
}

export default MapPage