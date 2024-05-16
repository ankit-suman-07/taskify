import React, { useState } from 'react';
import "./SignUp.css";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../context/authContext';

const SignUp = () => {
    const { currentUser, loading } = useAuth();

    const [email, setEmail] = useState(''); // Corrected useState
    const [password, setPassword] = useState(''); // Corrected useState
    const [isSigningIn, setIsSigningIn] = useState(false); // Corrected useState
    const [errorMessage, setErrorMessage] = useState(''); // Corrected useState

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doCreateUserWithEmailAndPassword(email, password);
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault(); // Corrected preventDefault
        if (!isSigningIn) {
            setIsSigningIn(true);
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false);
            })
        }
    }

    // Function to handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // Function to handle password input change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            SignUp
            <form onSubmit={onSubmit} >
                Email: <input type='email' value={email} onChange={handleEmailChange} placeholder="Enter Email ID" /> {/* Added value and onChange */}
                Password: <input type='password' value={password} onChange={handlePasswordChange} placeholder='Enter Password' /> {/* Added value and onChange */}
                <button type="submit" disabled={isSigningIn} >Sign In</button>
            </form>
            {/* Uncomment below if you want to enable Google sign in */}
            {/* <button onClick={onGoogleSignIn}>Sign In with Google</button> */}
        </div>
    )
}

export default SignUp
