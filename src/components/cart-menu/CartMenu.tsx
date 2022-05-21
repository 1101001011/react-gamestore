import React from 'react';
import {Game} from '../../types/game';
import MyButton from "../UI/button/MyButton";
import CartItem from "../cart-item/CartItem";
import './CartMenu.scss'

interface CartMenuProps {
    items: Game[]
    totalPrice: number
    onClick: () => void
}

const CartMenu: React.FC<CartMenuProps> = ({items, totalPrice, onClick}) => {
    return (
        <div className='cart-menu'>
            <div className="cart-menu__games-list">
                { items.length > 0 ? items.map(item => <CartItem item={item} key={item.id}/>)
                    : 'Корзина пуста'
                }
            </div>
            { items.length > 0 ?
                <div className='cart-menu__arrange'>
                    <div className="cart-menu__total-price">
                        <span>Итого:</span>
                        <span>{totalPrice} руб.</span>
                    </div>
                    <MyButton type='primary' onClick={onClick}>
                        Оформить заказ
                    </MyButton>
                </div>
                : null
            }
        </div>
    );
};

export default CartMenu;