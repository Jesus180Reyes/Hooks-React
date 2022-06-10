import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<HomeScreen />}></Route>
                    <Route exact path='/about' element={<AboutScreen></AboutScreen>}></Route>
                    <Route exact path='/login' element={<LoginScreen />}></Route>
                    <Route element={<HomeScreen />}></Route>
                </Routes>
            </div>
        </Router>
    )
}
