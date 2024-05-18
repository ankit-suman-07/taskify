import React from 'react'
import "./Navbar.css";
import UserIcon from "../../assets/man.png";

const Navbar = () => {
    return (
        <div className='navbar' >
            <div className='navbar-logo' >
                Taskify.
            </div>
            <div className='navbar-user' >
                <div className='navbar-user-welcome' >
                    Welcome, <span>ankitsuman07@gmail.com</span>
                </div>
                <div className='navbar-user-image' >
                    <img src={UserIcon} alt='user-profile' />
                </div>
            </div>
        </div>
    )
}

export default Navbar