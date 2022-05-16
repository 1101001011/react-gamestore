import React from 'react';
import {Game} from "../../pages/home-page/games";
import './GameItem.scss'

interface GameItemProps {
    game: Game
}

const GameItem: React.FC<GameItemProps> = ({game}) => {
    return (
        <div className='game-item'>
            <div className='game-item__details'>
                <span className='game-item__title'>{game.title}</span>
                <div className='game-item__genres'>
                    {game.genres.map(genre =>
                        <div key={genre}>{genre}</div>
                    )}
                </div>
                <div className='game-item__buy'>Buy</div>
            </div>
        </div>
    );
};

export default GameItem;