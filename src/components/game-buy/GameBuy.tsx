import React from 'react';
import {Game} from "../../pages/home-page/games";
import MyButton from "../UI/button/MyButton";
import './GameBuy.scss'

interface GameBuyProps {
    game: Game
}

const GameBuy: React.FC<GameBuyProps> = ({game}) => {
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <MyButton onClick={() => console.log('in cart')}>
                В корзину
            </MyButton>
        </div>
    );
};

export default GameBuy;