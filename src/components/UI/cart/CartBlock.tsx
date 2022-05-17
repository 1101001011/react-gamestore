import React, {useState} from 'react';
import {MdOutlineShoppingCart} from "react-icons/md";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import CartMenu from "../../cart-menu/CartMenu";
import {calcTotalPrice} from "../../../utils/totalPrice";
import './CartBlock.scss'
import ItemsQuantity from "../items-quantity/ItemsQuantity";
import {useNavigate} from "react-router-dom";

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const {items} = useTypedSelector(state => state.cart)
    const totalPrice = calcTotalPrice(items)
    const navigate = useNavigate()

    const orderHandler = () => {
        navigate('/order')
        setIsCartMenuVisible(false)
    }

    return (
        <div className='cart-block'>
            <ItemsQuantity quantity={items.length}/>
            { /* cart icon from react-icons*/ }
            <MdOutlineShoppingCart
                size={26}
                className='cart-block__icon'
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {/*{totalPrice > 0 ? <span className='cart-block__title'>{totalPrice} руб.</span>*/}
            {/*    : null*/}
            {/*}*/}
            {isCartMenuVisible && <CartMenu
                                    items={items}
                                    totalPrice={totalPrice}
                                    onClick={orderHandler} />}
        </div>
    );
};

export default CartBlock;