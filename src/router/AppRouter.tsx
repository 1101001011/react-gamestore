import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AuthContext} from '../context/authContext';
import {privateRoutes, publicRoutes} from './router';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.element} key={route.path}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} key={route.path}/>
                )}
            </Routes>
    )
};

export default AppRouter;