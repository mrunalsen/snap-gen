import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import Home from '../../../components/Home';
import Login from '../login/Login';
import Signup from '../login/Signup';
const Routing = () => {
    return (
        <> <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Router></>
    );
};

export default Routing;