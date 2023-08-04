import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginAction from '../login/LoginAction';

const Header = () => {
    const [username, setUsername] = useState('Mrunal');
    const [showLoginAction, setShowLoginAction] = useState(false);
    const [showProfileBtn, setShowProfileBtn] = useState(true);
    const [usermail, setUsermail] = useState('');

    const noderef = useRef(null);

    const handleClick = () => {
        setShowLoginAction(!showLoginAction);
    };
    return (
        <div className='relative flex justify-between items-center bg-blue-500'>
            <div className='flex items-center'>
                <Link to={'/'}><i className="bi bi-amd text-white py-2 px-4"></i></Link>
                <h2 className='text-3xl text-white'>Forms</h2>
            </div>
            <div>
                <h2 className='text-xl text-white'>Snapshot Review</h2>
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

                <button className="btn-primary focus:ring-0" onClick={handleClick}>
                    <i className="bi bi-caret-down-fill me-2"></i>
                    {username}
                </button>
            </div>
        </div>
    );
};

export default Header;