import React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import Home from '../../../components/Home';
import Admin from '../../../components/Admin';
import Login from '../login/Login';
import Signup from '../login/Signup';
// import Employee from '../../../components/Employee';
const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/employee' element={<Employee />} /> */}
            </Routes>
        </>
    );
};

export default Routing;