import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginAction from '../login/LoginAction';
import { CSSTransition } from 'react-transition-group';
import logo from '../../../assets/images/1rlogo.png';

const Header = () => {
    const [username, setUsername] = useState('Profile');
    const [showLoginAction, setShowLoginAction] = useState(false);
    const [showProfileBtn, setShowProfileBtn] = useState(true);

    const noderef = useRef(null);

    const handleClick = () => {
        setShowLoginAction(!showLoginAction);
    };
    return (
        <div className='relative flex justify-between items-center bg-blue-500'>
            <div className='flex items-center'>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className='w-10 m-2' />
                </Link>
            </div>
            <div>
                <h2 className='text-xl text-white'>Form</h2>
            </div>
            <div className='text-white'>

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

                <button className="btn-primary shadow-none focus:ring-0" onClick={handleClick}>
                    <i className="bi bi-caret-down-fill me-2"></i>
                    {username}
                </button>
            </div>
        </div>
    );
};

export default Header;