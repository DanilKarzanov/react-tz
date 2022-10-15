import React from "react"
import "../STYLES/Deliveryform.css"
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { switchform } from "../REDUX/deliveryFormSlice"
import axios from "axios"

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
        document.getElementById("form1").submit()
        document.getElementById("form2").submit()
        axios.post("http://localhost:4000/auth/registration", {username: `${data.login}`, password: `${data.password}`}).then(() =>  console.log('success'))
        navigate('/cart/success')   // после этого сразу перекидывает на главную без нажатия кнопки?
    }

    const dispatch = useDispatch()
    const condition = useSelector(state => state.form.condition)

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    return (
        <div className="deliveryform__container">
            <h4 className="deliveryform__title">Укажите ваши данные</h4>
            <form id='form1' className="deliveryform__form" onSubmit={handleSubmit(onSubmit)}>
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
                    <input type="checkbox" id="checkbox" defaultChecked={true} onChange={() => dispatch(switchform())}/>
                </label>
                
            </form>
            {condition && 
            <div className="registerform__container">
            <form id='form2' className='registerform__form' onSubmit={handleSubmit(onSubmit)}>
                <label className="registerform__login">Логин
                    <input className="registerform__box" 
                        {...register('login', {
                            required: 'Поле обязательно!',
                            minLength: {value: 5, message: 'Минимум 5 символов'},
                            maxLength: {value: 20, message: 'Максимум 20 символов'},
                            value: email,
                            onChange: (e) => {setEmail(e.target.value)}
                        })}
                    />
                    <div className="registerform__warning">
                        {errors?.login && <p>{errors.login.message}</p>}
                    </div>
                </label>
                <label className="registerform__password">Пароль
                    <input className="registerform__box"
                        {...register('password', {
                            required: 'Поле обязательно!',
                            minLength: {value: 5, message: 'Минимум 5 символов'},
                            maxLength: {value: 20, message: 'Максимум 20 символов'},
                            value: password,
                            onChange: (e) => {setPassword(e.target.value)}
                        })}
                    />
                    <div className="registerform__warning">
                        {errors?.password && <p>{errors.password.message}</p>}
                    </div>
                </label>
                
            </form>
        </div>}
            <button type='submit' className="deliveryform__order" onClick={handleSubmit(onSubmit)}>Заказать</button>
        </div>
    )
}

export default Deliveryform