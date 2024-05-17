import React, { useState } from 'react';
import "./Authentication.css";

import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import GoogleSignIn from './google-signin/GoogleSignIn';

import { signInWithEmailAndPassword } from 'firebase/auth';

const Authentication = () => {
    const [signIn, setSignIn] = useState(true);



    return (
        <div className='authentication' >
            <div className='auth-left' >
                <div className='auth-logo' >
                    Taskify
                </div>
            </div>
            <div className='auth-right' >
                {
                    signIn
                        ? <button onClick={() => setSignIn(!signIn)} >Sign Up</button>
                        : <button onClick={() => setSignIn(!signIn)} >Sign In</button>
                }
                <div className='auth-form-box' >
                    {
                        signIn
                            ? <SignIn />
                            : <SignUp />
                    }
                </div>
                {
                    <GoogleSignIn />
                }

            </div>
        </div>
    )
}

export default Authentication