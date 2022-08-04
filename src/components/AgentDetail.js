import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../style.css"

const AgentDetail = () => {
    const id = useParams()
    const [agent, setAgent] = useState({})
    useEffect(() => {
        axios.get(`https://valorant-api.com/v1/agents/${id.id}`).then(res => {
            setAgent(res.data.data)
            console.log(res.data.data)
        })
    }, [id])

    document.querySelector('title').textContent = agent.displayName

    return (
        <section className='bg-image detail-bg  d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            <div className="container mb-5" style={{ width: '44rem', marginTop: '-100px' }}>
                <img className="card-img-top" style={{marginTop : '100px'}} src={agent.fullPortrait} alt="-Agent-" />
                <div className="card-body">
                    <h3 className="text-center card-title mt-2">{agent.displayName}</h3>
                    <h5 className="text-center card-title mt-2">Role: {agent.isPlayableCharacter && <>{agent.role.displayName}</>}</h5>
                    <h5 className="text-center card-title mt-2">Creator: {agent.developerName} </h5>
                    <p className="card-text mt-2 text-center">{agent.description}</p>
                </div>
            </div>
        </section>
    )
}

export default AgentDetail