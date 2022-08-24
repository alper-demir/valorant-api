import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AgentPage from './AgentPage';
import Loading from './Loading';
import NoFoundPage from './NoFoundPage';
import MainContext from '../context/MainContext';
import { useContext } from 'react';

const Agents = () => {
    const { setLoading, loading, response, setResponse } = useContext(MainContext)

    document.querySelector('title').textContent = 'Agents'

    const [agents, setAgents] = useState([])
    useEffect(() => {
        setLoading(true)
        axios.get('https://valorant-api.com/v1/agents').then(res => {

            if (res.data.status === 200) {
                setAgents(res.data.data)
                console.log(res.data)
                setLoading(false)
                setResponse(true)
            }
            else {
                setLoading(false)
                setResponse(false)
            }
        })
    }, [])

    if (loading) {
        return <Loading />
    }
    else {
        if (response) {
            return (
                <div className='mb-5' style={{ minHeight: '100vh' }}>
                    {agents.displayName}
                    <div className="container mt-4">
                        <h1 style={{ color: '#6E1D4A' }} className='text-center'>Agents</h1>
                        <div className="row">
                            {agents.map((agent, index) => {
                                if (agent.isPlayableCharacter) {
                                    return <AgentPage agent={agent} key={index} />
                                }
                                else {
                                    return ''
                                }
                            })}
                        </div>
                    </div>
                </div>
            )
        }

        else {
            return <NoFoundPage />
        }

    }


}

export default Agents