import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../style.css"
import Loading from './Loading'
import NoFoundPage from './NoFoundPage'
import MainContext from './../context/MainContext';

const AgentDetail = () => {
    const id = useParams()
    const [agent, setAgent] = useState({})
    const { setLoading, loading, response, setResponse } = useContext(MainContext)
    useEffect(() => {
        setLoading(true)

        axios.get(`https://valorant-api.com/v1/agents/${id.id}`).then(res => {
            if (res.data.status === 200) {
                setAgent(res.data.data)
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

    document.querySelector('title').textContent = agent.displayName

    if (loading) {
        return <Loading />
    }
    else {
        if (response) {
            return (
                <section className='bg-image detail-bg  d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
                    <div className="container mb-5" style={{ width: '44rem', marginTop: '-100px' }}>
                        <img className="card-img-top" style={{ marginTop: '100px' }} src={agent.fullPortrait} alt="-Agent-" />
                        <div className="card-body text-center">
                            <h3 className="card-title mt-2">{agent.displayName}</h3>
                            <h5 className="card-title mt-2">Role: {agent.isPlayableCharacter && <>{agent.role.displayName}</>}</h5>
                            <h5 className="card-title mt-2">Creator: {agent.developerName} </h5>
                            <p className="card-text mt-2">{agent.description}</p>
                        </div>
                    </div>
                </section>
            )
        }
        else {
            return <NoFoundPage />
        }
    }

}

export default AgentDetail