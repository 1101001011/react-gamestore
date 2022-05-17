import {createSlice} from "@reduxjs/toolkit";
import {CartState, RemoveItemAction, SetItemAction} from "../../types/cart";

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: SetItemAction) {
            state.items.push(action.payload)
        },
        removeItemFromCart(state, action: RemoveItemAction) {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const {addItemToCart, removeItemFromCart} = cartSlice.actions
export default cartSlice.reducer

