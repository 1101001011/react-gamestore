import React from 'react';
import {Game} from '../../types/game';
import GameCover from '../game-cover/GameCover';
import GameBuy from '../game-buy/GameBuy';
import GameGenre from '../game-genre/GameGenre';
import { motion } from 'framer-motion';
import './GameItem.scss'

const GameItem: React.FC<{game: Game}> = ({game}) => {
    return (
        <div className='game'>
            <motion.div
                className='game-item__container'
                whileHover={{scale: 1.02, y: -4}}
                transition={{duration: .2}}
            >
                <motion.div className='game-item' layoutId={`game-item-${game.id}`}>
                    <GameCover image={game.image} id={game.id}/>
                    <motion.div className='game-item__content' layoutId={`game-item__content-${game.id}`}>
                        <span className='game-item__title'>{game.title}</span>
                        <div className='game-item__genres'>
                            {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}
                        </div>
                    </motion.div>
                    <GameBuy game={game}/>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default GameItem;