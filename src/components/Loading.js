import React from 'react'
import loading from '../loading.gif'

const Loading = () => {
    return (
        <div className='d-flex align-items-center' style={{ minHeight: '100vh' }}>
            <img src={loading} alt="Loading.." style={{ width: '100px', margin: '20px auto', display: 'block' }} />
        </div>
    )
}

export default Loading