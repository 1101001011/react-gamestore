import React from 'react';
import {useParams} from "react-router-dom";
import GamesList from "../../components/games-list/GamesList";
import {AnimatePresence} from "framer-motion";
import GameItemReveal from "../../components/game-item/GameItemReveal";

const HomePage = () => {
    const {id} = useParams()
    return (
        <>
            <GamesList/>
            <AnimatePresence>
                {id && <GameItemReveal id={parseInt(id)}/>}
            </AnimatePresence>
        </>
    );
};

export default HomePage;