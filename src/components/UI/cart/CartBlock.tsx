import React from 'react';
import {RiShoppingCartLine} from "react-icons/ri";
import './CartBlock.scss'
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const CartBlock = () => {
    const {items} = useTypedSelector(state => state.cart)
    const totalPrice = items.reduce((acc, item) => acc += item.price, 0)

    return (
        <div className='cart-block'>
            <RiShoppingCartLine size={25} className='cart-block__icon'/>
            <span className='cart-block__title'>{totalPrice} руб.</span>
        </div>
    );
};

export default CartBlock;