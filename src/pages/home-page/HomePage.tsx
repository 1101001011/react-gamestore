import React from 'react';
import {GAMES} from "./games";
import GameItem from "../../components/game-item/GameItem";
import './HomePage.scss'

const HomePage = () => {
    return (
        <div className='home-page'>
            {GAMES.map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    );
};

export default HomePage;