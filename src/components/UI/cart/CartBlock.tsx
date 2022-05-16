import React from 'react';
import {RiShoppingCartLine} from "react-icons/ri";
import './CartBlock.scss'

const CartBlock = () => {
    return (
        <div className='cart-block'>
            <RiShoppingCartLine size={25} className='cart-block__icon'/>
            <span className='cart-block__title'>2300 руб.</span>
        </div>
    );
};

export default CartBlock;