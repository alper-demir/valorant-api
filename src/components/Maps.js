import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MapPage from './MapPage'
import Loading from './Loading'
import NoFoundPage from './NoFoundPage';

const Maps = ({ loading, setLoading, response, setResponse }) => {

    const [maps, setMap] = useState([])

    document.querySelector('title').textContent = 'Maps'

    useEffect(() => {
        setLoading(true)
        axios.get('https://valorant-api.com/v1/maps').then(res => {

            if (res.data.status === 200) {
                setMap(res.data.data)
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

    if (loading) {
        return <Loading />
    }

    else {
        if (response) {
            return (
                <div className='mb-5' style={{ minHeight: '100vh' }}>
                    <div className="container mt-4">
                        <h1 style={{ color: '#6E1D4A' }} className='text-center'>Maps</h1>
                        <div className="row">
                            {maps.map((map, index) =>
                            (
                                <MapPage key={index} map={map} />
                            ))}
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

export default Maps