import {Game} from "../pages/home-page/games";

export interface CartState {
    items: Game[]
}

export interface SetItemAction {
    payload: Game
}
export interface RemoveItemAction {
    payload: number
}