import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const LoginAction = forwardRef(function LoginAction(props, ref) {
    return (
        // <div ref={ref}>
        <div className='bg-blue-500 flex flex-col rounded-md shadow-xl'>
            <Link to={`/create`} role='button' className='btn-primary w-auto flex justify-center focus:ring-0 whitespace-nowrap'>New Form</Link>
            <Link to={`/`} role='button' className='btn-primary w-auto flex justify-center focus:ring-0'>Logout</Link>
        </div>
        // </div>
    );
});
export default LoginAction;