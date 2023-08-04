import React from 'react';
import { Link } from 'react-router-dom';

const LoginAction = () => {
    const logOut = () => {
        console.log(`signed out`),
            navigateTo(`/login`);
    };
    return (
        <div>
            <div className='bg-blue-500 absolute top-[49px] right-1 flex flex-col rounded-md shadow-xl'>
                <Link to={`/login`} role='button' className='btn-primary w-auto flex justify-center focus:ring-0'>Login</Link>
                <Link to={`/signup`} role='button' className='btn-primary w-auto flex justify-center focus:ring-0'>Sign Up</Link>
                <button type='submit' className="btn-primary w-auto" onClick={logOut}>Log Out</button>
            </div>
        </div>
    );
};

export default LoginAction;