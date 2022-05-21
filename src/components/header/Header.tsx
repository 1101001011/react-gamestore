import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import CartBlock from "../UI/cart/CartBlock";
import MyButton from '../UI/button/MyButton';
import {AuthContext} from '../../context/authContext';
import './Header.scss'

const Header = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='header'>
            <div className='wrapper'>
                <NavLink to='/' className='header__link-home'>
                    Game Store
                </NavLink>
                <div className='header__cart-btn'>
                    <CartBlock/>
                </div>
                <div className='header__logout-btn'>
                    <MyButton type='primary' onClick={logout}>
                        Выйти
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Header;