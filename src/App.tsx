import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Header from "./components/header/Header";
import './styles/App.scss'

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