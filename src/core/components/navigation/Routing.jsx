import React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import Home from '../../../components/Home';
import Admin from '../../../components/Admin';
import FormContainer from '../../../components/forms/createForm/FormContainer';
import Login from '../login/Login';
import Signup from '../login/Signup';
import MdxEditor from '../../../shared/MdxEditor';

const Routing = () => {
    return (
        <>
            {/* Start : Routing paths */}
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/create' element={<FormContainer />} />
                <Route path='/editor' element={<MdxEditor />} />
            </Routes>
            {/* End : Routing paths */}
        </>
    );
};

export default Routing;