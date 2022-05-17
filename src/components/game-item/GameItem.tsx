import React from 'react';
import {Game} from "../../pages/home-page/games";
import GameCover from "../game-cover/GameCover";
import GameBuy from "../game-buy/GameBuy";
import GameGenre from "../game-genre/GameGenre";
import './GameItem.scss'

interface GameItemProps {
    game: Game
}

const GameItem: React.FC<GameItemProps> = ({game}) => {
    return (
        <div className='game-item'>
            <GameCover image={game.image}/>
            <div className='game-item__details'>
                <span className='game-item__title'>{game.title}</span>
                <div className='game-item__genres'>
                    {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>
                    )}
                </div>
                <GameBuy game={game}/>
            </div>
        </div>
    );
};

export default GameItem;