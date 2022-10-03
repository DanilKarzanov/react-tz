import React from 'react'
import axios from 'axios'
import '../STYLES/Loginform.css'
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'

const Loginform = () => {
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

    const onSubmit = data => {
        axios.post("http://localhost:4000/auth/login", {username: `${data.login}`, password: `${data.password}`}).then(response => console.log(response.data))
        reset()  // не очищается 
    }
    
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div className="loginform__container">
            <form className='loginform__form' onSubmit={handleSubmit(onSubmit)}>
                <label className="loginform__login">Логин
                    <input className="loginform__box" 
                    {...register('login', {
                        required: 'Поле обязательно!',
                        minLength: {value: 5, message: 'Минимум 5 символов'},
                        maxLength: {value: 20, message: 'Максимум 20 символов'},
                        value: email,
                        onChange: (e) => {setEmail(e.target.value)}
                    })}
                    />
                    <div className="loginform__warning">
                        {errors?.login && <p>{errors.login.message}</p>}
                    </div>
                </label>
                <label className="loginform__password">Пароль
                    <input className="loginform__box" 
                        {...register('password', {
                            required: 'Поле обязательно!',
                            minLength: {value: 5, message: 'Минимум 5 символов'},
                            maxLength: {value: 20, message: 'Максимум 20 символов'},
                            value: password,
                            onChange: (e) => {setPassword(e.target.value)}
                        })}
                    />
                    <div className="loginform__warning">
                        {errors?.password && <p>{errors.password.message}</p>}
                    </div>
                </label>
                <button className="loginform__submit">Войти</button>
                <Link to='register'><button className='loginform__redirect'>Нет аккаунта</button></Link>
            </form>
        </div>
    )
}

export default Loginform