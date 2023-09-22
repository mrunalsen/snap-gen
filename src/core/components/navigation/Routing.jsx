import React, { lazy, Suspense } from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
const Home = lazy(() => import('../../../components/Home'));
const Admin = lazy(() => import('../../../components/Admin'));
const FormContainer = lazy(() => import('../../../components/forms/createForm/FormContainer'));
const Login = lazy(() => import('../login/Login'));
const Signup = lazy(() => import('../login/Signup'));
const ManageEmployee = lazy(() => import('../../../components/manageEmployee/ManageEmployee'));
const FormList = lazy(() => import('../../../components/formlist/FormList'));
const FormQuestions = lazy(() => import('../../../components/formlist/FormQuestions'));

const Routing = () => {
    return (
        <>
            <Suspense fallback={<div>Loading....</div>}>
                {/* Start : Routing paths */}
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/create' element={<FormContainer />} />
                    <Route path='/manage' element={<ManageEmployee />} />
                    <Route path='/formlist' element={<FormList />} />
                    <Route path="/forms/:id" element={<FormQuestions />} />
                </Routes>
                {/* End : Routing paths */}
            </Suspense>
        </>
    );
};

export default Routing;