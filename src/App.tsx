import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import { AuthContext } from './context/authContext';
import AppRouter from './router/AppRouter';
import './styles/App.scss'

const App = () => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth
        }}>
            <BrowserRouter>
                <div className='App'>
                    {isAuth
                        ? <Header/>
                        : null
                    }
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default App;