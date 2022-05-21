import React from 'react';
import HomePage from '../pages/home-page/HomePage';
import OrderPage from '../pages/order-page/OrderPage';
import LoginPage from '../pages/login-page/LoginPage';
import {Route} from '../types/route';
import {Navigate} from 'react-router-dom';

export const privateRoutes: Route[] = [
    { path: '/games', element: <HomePage/> },
    { path: '/games/:id', element: <HomePage/> },
    { path: '/order', element: <OrderPage/> },
    { path: '*', element: <Navigate to='/games' replace/> },
]

export const publicRoutes: Route[] = [
    { path: '/login', element: <LoginPage/> },
    { path: '*', element: <Navigate to='/login' replace/> }
]