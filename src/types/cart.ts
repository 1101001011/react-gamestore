import {Game} from './game';

export interface CartState {
    items: Game[]
}

export interface SetItemAction {
    payload: Game
}
export interface RemoveItemAction {
    payload: number
}