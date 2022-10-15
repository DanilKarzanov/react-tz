import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Registerform.css"

const Registerform = () => {
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
        axios.post("http://localhost:4000/auth/registration", {username: `${data.login}`, password: `${data.password}`}).then(() => console.log('success'))
        reset()       // post выполняется, но форма не очищается?
    }

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const margin = {
        marginLeft: '500px'
    }

    return (
        <div className="registerform__container" style={margin}>
            <form className='registerform__form' onSubmit={handleSubmit(onSubmit)}>
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
                <button className="registerform__submit" onClick={handleSubmit(onSubmit)}>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Registerform
