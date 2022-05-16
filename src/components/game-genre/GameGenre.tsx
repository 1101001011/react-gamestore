import React from 'react';
import './GameGenre.scss'

interface GameGenreProps {
    genre: string
}

const GameGenre: React.FC<GameGenreProps> = ({genre}) => {
    return (
        <div className='game-item__genre'>
            {genre}
        </div>
    );
};

export default GameGenre;