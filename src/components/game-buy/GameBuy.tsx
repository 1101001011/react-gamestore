import React from 'react';
import {Game} from "../../pages/home-page/games";
import MyButton from "../UI/button/MyButton";
import './GameBuy.scss'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {addItemToCart} from "../../store/reducers/cartReducer";

interface GameBuyProps {
    game: Game
}

const GameBuy: React.FC<GameBuyProps> = ({game}) => {
    const dispatch = useAppDispatch()

    const buyItemHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        dispatch(addItemToCart(game))
    }

    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <MyButton onClick={(e) => buyItemHandle(e)}>
                В корзину
            </MyButton>
        </div>
    );
};

export default GameBuy;