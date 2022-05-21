import React, {useContext} from 'react';
import MyButton from '../../components/UI/button/MyButton';
import MyInput from '../../components/UI/input/MyInput';
import {AuthContext} from '../../context/authContext';
import './LoginPage.scss'

const LoginPage = () => {
    const {setIsAuth} = useContext(AuthContext)

    const login = () => {
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className='login-page'>
            <h1 className='login-page__title'>
                Login
            </h1>
            <MyInput type="text" placeholder="Login"/>
            <MyInput type="password" placeholder="Password"/>
            <MyButton type='primary' onClick={login}>Войти</MyButton>
        </div>
    )
}

export default LoginPage