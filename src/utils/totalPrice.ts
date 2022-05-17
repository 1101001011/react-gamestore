import {Game} from "../pages/home-page/games";

export const calcTotalPrice = (items: Game[]) => {
    return items.reduce((acc, item) => acc += item.price, 0)
}