import React from 'react';
import './GameCover.scss'

interface GameCoverProps {
    image: string
}

const GameCover: React.FC<GameCoverProps> = ({image}) => {
    return (
        <div className='game-cover'>
            <img src={image} alt=''/>
        </div>
    );
};

export default GameCover;