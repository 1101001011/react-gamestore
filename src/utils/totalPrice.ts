import {Game} from '../types/game';

export const calcTotalPrice = (items: Game[]) => {
    return items.reduce((acc, item) => acc += item.price, 0)
}