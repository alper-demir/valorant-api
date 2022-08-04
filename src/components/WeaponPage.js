import React from 'react'
import { Link } from 'react-router-dom';

const WeaponPage = (props) => {

    return (
        <div className="col-md-3">
            <div className="card mt-2 bg-light p-3" >
                <img src={props.weapon.displayIcon} style={{ height: 'auto' }} alt="Weapon" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {props.weapon.displayName}
                    </h5>
                    <Link to={`detail/${props.weapon.uuid}`} className="btn btn-secondary btn-sm d-block">Learn More!</Link>
                </div>
            </div>
        </div>)
}

export default WeaponPage