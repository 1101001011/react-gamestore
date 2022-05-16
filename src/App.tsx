import React from 'react';
import './styles/App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Header from "./components/header/Header";
import CartPage from "./pages/cart-page/CartPage";

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Routes>
                    <Route path='/' element={ <HomePage/> }/>
                    <Route path='/cart' element={ <CartPage/> }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;