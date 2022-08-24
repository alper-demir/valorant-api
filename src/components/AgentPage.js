import React from 'react'
import { Link } from 'react-router-dom';


const AgentPage = (props) => {
    return (
        <div className="col-md-3">
            <div className="card mt-2 bg-light">
                <img src={props.agent.fullPortrait} alt="Agent" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {props.agent.displayName}
                    </h5>
                    <Link to={`detail/${props.agent.uuid}`} className="btn btn-danger btn-sm d-block">Learn More!</Link>
                </div>
            </div>
        </div>)
}

export default AgentPage