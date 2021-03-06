import React from 'react';
import {Game} from '../../types/game';
import MyButton from '../UI/button/MyButton';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {addItemToCart, removeItemFromCart} from '../../store/reducers/cartReducer';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import './GameBuy.scss'

const GameBuy: React.FC<{game: Game}> = ({game}) => {
    const {items} = useTypedSelector(state => state.cart)
    const dispatch = useAppDispatch()

    const isItemInCart = items.some(item => item.id === game.id)

    const buyItemHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (isItemInCart) {
            dispatch(removeItemFromCart(game.id))
        } else dispatch(addItemToCart(game))
    }

    return (
        <div className='game-buy'>
            <span>{game.price} руб.</span>
            <MyButton type={isItemInCart ? 'secondary' : 'primary'} onClick={(e) => buyItemHandle(e)}>
                {isItemInCart
                    ? 'Убрать из корзины'
                    : 'В корзину'
                }
            </MyButton>
        </div>
    );
};

export default GameBuy;