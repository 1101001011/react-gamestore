import React from 'react';
import './styles/App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Header from "./components/UI/header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Routes>
                    <Route path='/' element={ <HomePage/> }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;