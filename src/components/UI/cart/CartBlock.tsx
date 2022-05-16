import React from 'react';
import {RiShoppingCartLine} from "react-icons/ri";
import './CartBlock.scss'
import {NavLink} from "react-router-dom";

const CartBlock = () => {
    return (
        <div className='cart-block'>
            <NavLink to='/cart' className='cart-block__link'>
                <RiShoppingCartLine size={25} className='cart-block__icon'/>
                <span className='cart-block__title'>2300 руб.</span>
            </NavLink>
        </div>
    );
};

export default CartBlock;