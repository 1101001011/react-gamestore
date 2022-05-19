import React from 'react';
import {GAMES} from "../../pages/home-page/games";
import GameItem from "../game-item/GameItem";
import './GamesList.scss'

const GamesList = () => {
    return (
        <div className='games-list'>
            {GAMES.map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    );
};

export default GamesList;