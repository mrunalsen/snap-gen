import React from 'react';
import { Link } from 'react-router-dom';

const LoginAction = () => {
    return (
        <div>
            <div className='bg-blue-500 absolute top-[49px] right-1 flex flex-col rounded-md shadow-xl'>
                <Link to={`/create`} role='button' className='btn-primary w-auto flex justify-center focus:ring-0 whitespace-nowrap'>New Form</Link>
                <Link to={`/`} role='button' className='btn-primary w-auto flex justify-center focus:ring-0'>Logout</Link>
            </div>
        </div>
    );
};

export default LoginAction;