import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";

const RootReducer = combineReducers({
    cart: cartReducer
})

export const store = configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof RootReducer>
export type AppDispatch = typeof store.dispatch