import React from 'react';
import {motion} from 'framer-motion';
import GameCover from '../game-cover/GameCover';
import GameGenre from '../game-genre/GameGenre';
import GameBuy from '../game-buy/GameBuy';
import {NavLink} from 'react-router-dom';
import {GAMES} from '../../pages/home-page/games';

const GameItemReveal: React.FC<{id: number}> = ({id}) => {
    const game = GAMES.find(game => game.id === id)!

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: 'auto' }}
                className='overlay'
            >
                <NavLink to={'/'}/>
            </motion.div>
            <div className='game-item__container open'>
                <motion.div className='game-item' layoutId={`game-item-${game.id}`}>
                    <GameCover image={game.image} id={game.id}/>
                    <motion.div className='game-item__content' layoutId={`game-item__content-${game.id}`}>
                        <span className='game-item__title'>{game.title}</span>
                        <div className='game-item__genres'>
                            {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}
                        </div>
                    </motion.div>
                    <motion.div
                        className='game-item__description'
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: .4}}
                    >
                        <p>{game.description}</p>
                    </motion.div>
                    <GameBuy game={game}/>
                </motion.div>
            </div>
        </>
    );
};

export default GameItemReveal;