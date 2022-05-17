import React, {useState} from 'react';
import {RiShoppingCartLine} from "react-icons/ri";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import CartMenu from "../../cart-menu/CartMenu";
import {calcTotalPrice} from "../../../utils/totalPrice";
import './CartBlock.scss'

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const {items} = useTypedSelector(state => state.cart)
    const totalPrice = calcTotalPrice(items)

    return (
        <div
            className='cart-block'
            onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        >
            { /* cart icon from react-icons*/ }
            <RiShoppingCartLine size={25} className='cart-block__icon'/>
            {totalPrice > 0 ? <span className='cart-block__title'>{totalPrice} руб.</span>
                : null
            }
            {isCartMenuVisible && <CartMenu items={items} totalPrice={totalPrice} onClick={() => {}} />}
        </div>
    );
};

export default CartBlock;