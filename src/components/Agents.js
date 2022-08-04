import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AgentPage from './AgentPage';

const Agents = () => {

    const [agents, setAgents] = useState([])
    useEffect(() => {
        axios.get('https://valorant-api.com/v1/agents').then(res => {

            if (res.data.status === 200) {
                setAgents(res.data.data)
                console.log(res.data)
            }
        })
    }, [])

    document.querySelector('title').textContent = 'Agents'

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
                            return '' //<div key = {index}></div>
                        }
                    })}
                </div>
            </div>

        </div>
    )
}

export default Agents