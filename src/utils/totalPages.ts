import {GAMES} from '../pages/home-page/games';

const calcTotalPages = () => {
    return GAMES.length/6
}

export const getPagesArray = () => {
    const totalPages = calcTotalPages()

    let result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }

    return result
}