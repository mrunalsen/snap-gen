import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import LoginAction from '../login/LoginAction';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [username, setUsername] = useState('Profile');
    const [showLoginAction, setShowLoginAction] = useState(false);
    const [showProfileBtn, setShowProfileBtn] = useState(true);

    const noderef = useRef(null);
    

    const location = useLocation();

    // Check if the current path is '/create'
    const isCreatePath = location.pathname === '/create';

    const handleClick = () => {
        setShowLoginAction(!showLoginAction);
    };
    return (
        <>
        <div className='relative flex justify-between items-center bg-blue-500 p-2'>
            <p className='text-white text-3xl font-bold p-1 ms-1 select-none'><span className='text-rose-500'>1</span>R</p>
            <div>
                <h2 className='text-xl font-medium text-white'>SnapGen</h2>
            </div>
            <div className='text-white'>


                <button className="btn-primary shadow-none focus:ring-0" onClick={handleClick}>
                    <i className="bi bi-caret-down-fill me-2"></i>
                    {username}
                </button>
            </div>
                <CSSTransition in={showLoginAction}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit
                    classNames="alert"
                    onEnter={() => { setShowProfileBtn(false); }}
                    onExited={() => { setShowProfileBtn(true); }}
                    ref={noderef}
                >
                    <LoginAction />
                </CSSTransition>
        </div>
        <div className={`${isCreatePath ? 'text-end my-2' : 'hidden'}`}>
                  <button type="submit" className='btn-primary text-sm me-4'>Submit</button>
                  </div>
        </>
    );
};

export default Header;