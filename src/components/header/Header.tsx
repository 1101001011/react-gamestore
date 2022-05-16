import React from 'react';
import {NavLink} from "react-router-dom";
import CartBlock from "../UI/cart/CartBlock";
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <NavLink to='/' className='header__link-home'>
                    Game Store
                </NavLink>
            </div>
            <div className='wrapper header__cart-btn'>
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;