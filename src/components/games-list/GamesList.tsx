import React from 'react';
import {GAMES} from "../../pages/home-page/games";
import GameItem from "../game-item/GameItem";
import './GamesList.scss'

const GamesList: React.FC<{page: number}> = ({page}) => {
    return (
        <div className='games-list'>
            {GAMES.slice((page-1)*6, page*6).map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    );
};

export default GamesList;