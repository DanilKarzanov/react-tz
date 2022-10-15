import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    const btnStyles = {
        background: '#2ba14b',
        color: 'white',
        padding: '12px',
        borderRadius: '8px',
        border: '#2ba14b',
        fontSize: '18px',
        cursor: 'pointer',
        marginLeft: '600px'
    }
    const titleStyles = {
        marginLeft: '500px'
    }

    return (
        <div>
            <h1 style={titleStyles}>Заказ успешно оформлен</h1>
            <Link to='/'><button style={btnStyles}>Вернуться на главную</button></Link>
        </div>
    )
}

export default Success
