import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import LoginAction from '../login/LoginAction';

const Header = () => {
    /* State for setting User name in the profile menu */
    const [username, setUsername] = useState('Profile');
    /* State of toggling logging profile action buttons */
    const [showLoginAction, setShowLoginAction] = useState(false);
    /* State for showing button for profile dropdown */
    const [showProfileBtn, setShowProfileBtn] = useState(true);

    /**
    * @description here the noderef is optional yet is provided so the CSSTransition group doesn't get confused in rendering between similar DOM elements 
    */
    const noderef = useRef(null);

    /**
    * @description the function toggles the state of profile dropdown which consists of logout action
    */
    const handleClick = () => {
        setShowLoginAction(!showLoginAction);
    };
    return (
        <>
            <div className='relative flex justify-between items-center bg-blue-500 p-2'>
                {/* Start : Brand name */}
                <p className='text-white text-3xl font-bold p-1 ms-1 select-none'><span className='text-rose-500'>1</span>R</p>
                {/* End : Brand name */}
                {/* Start : Form Name */}
                <h2 className='text-xl font-medium text-white'>SnapGen</h2>
                {/* End : Form Name */}
                {/* Start : Profile actions */}
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
                {/* End : Profile actions */}
            </div>
        </>
    );
};

export default Header;