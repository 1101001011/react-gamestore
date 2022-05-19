import React from 'react';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import './GameCover.scss'

interface GameCoverProps {
    image: string
    id: number
}

const GameCover: React.FC<GameCoverProps> = ({image, id}) => {
    return (
        <motion.div
            className='game-cover'
            layoutId={`game-cover-${id}`}
        >
            <img src={image} alt=''/>
            <NavLink to={`${id}`} className='game-cover__open-link'/>
        </motion.div>
    );
};

export default GameCover;