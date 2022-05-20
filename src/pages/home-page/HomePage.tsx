import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import GamesList from '../../components/games-list/GamesList';
import {AnimatePresence} from 'framer-motion';
import GameItemReveal from '../../components/game-item/GameItemReveal';
import Pagination from '../../components/UI/pagination/Pagination';

const HomePage = () => {
    const [page, setPage] = useState(1)
    const {id} = useParams()

    return (
        <>
            <GamesList page={page}/>
            <AnimatePresence>
                {id && <GameItemReveal id={parseInt(id)}/>}
            </AnimatePresence>
            <Pagination page={page} setPage={setPage}/>
        </>
    );
};

export default HomePage;