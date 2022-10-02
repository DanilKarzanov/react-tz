import React from "react"
import "../STYLES/Deliveryform.css"
import {useForm} from "react-hook-form"
import Registerform from "./Registerform"
import { useNavigate } from 'react-router-dom'

const Deliveryform = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onSubmit"
    })
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(JSON.stringify(data))  //some post req
        reset()
        navigate('/cart/success')
    }

    const [visibleRegister, setVisibleRegister] = React.useState(true)
    
    return (
        <div className="deliveryform__container">
            <h4 className="deliveryform__title">Укажите ваши данные</h4>
            <form className="deliveryform__form" onSubmit={handleSubmit(onSubmit)}>
                <label className="deliveryform__firstname">Имя
                    <input className="deliveryform__box" {...register('firstname', {
                        required: "Обязательно для ввода",
                        minLength: {value: 3, message: 'Минимум 3 символа'},
                        maxLength: {value: 20, message: 'Максимум 20 символов'}
                    })}/>
                    <div className="deliveryform__warning">
                        {errors?.firstname && <p>{errors.firstname.message}</p>}
                    </div>
                </label>
                <label className="deliveryform__email">Почта
                    <input className="deliveryform__box" {...register('email', {
                        required: "Обязательно для ввода",
                        minLength: {value: 5, message: 'Минимум 5 символа'}
                    })}/>
                    <div className="deliveryform__warning"> 
                        {errors?.email && <p>{errors.email.message}</p>}
                    </div>
                </label>
                <label className="deliveryform__phone">Телефон
                    <input className="deliveryform__box" {...register('phone', {
                        required: "Обязательно для ввода",
                        minLength: {value: 11, message: '11 символов'},
                        maxLength: {value: 11, message: '11 символов'}
                    })}/>
                    <div className="deliveryform__warning">
                        {errors?.phone && <p>{errors.phone.message}</p>}
                    </div>
                </label>
                <label className="deliveryform__adress">Адрес
                    <input className="deliveryform__box" {...register('adress', {
                        required: "Обязательно для ввода",
                        minLength: {value: 5, message: 'Минимум 5 символа'}
                    })}/>
                    <div className="deliveryform__warning">
                        {errors?.adress && <p>{errors.adress.message}</p>}
                    </div>
                </label>
                <label className="deliveryform__offerregistration">Зарегистрироваться
                    <input type="checkbox" id="checkbox" defaultChecked={true} onChange={e => setVisibleRegister(e.target.checked)}/>
                </label>
                {visibleRegister && <Registerform/>}
                <button className="deliveryform__order">Заказать</button>
                
            </form>
        </div>
    )
}

export default Deliveryform