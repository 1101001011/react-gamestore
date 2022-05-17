import React from 'react';
import {Game} from "../../pages/home-page/games";
import './CartItem.scss'

interface CartItemProps {
    item: Game
}

const CartItem: React.FC<CartItemProps> = ({item}) => {
    return (
        <div className='cart-item'>
            <span>{item.title}</span>
            <div className="cart-item__title">
                {item.price} руб.
            </div>
            {/*<div className="cart-item__close">*/}
            {/*    &times;*/}
            {/*</div>*/}
        </div>
    );
};

export default CartItem;