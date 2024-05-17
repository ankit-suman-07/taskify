import React, { useState } from 'react';
import "./SignUp.css";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../context/authContext';

const SignUp = () => {
    const { currentUser, loading } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            setErrorMessage('');
            try {
                await doCreateUserWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            setErrorMessage('');
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className='sign-up' >
            <h2>Sign Up</h2>
            {loading ? (
                <p>Loading...</p>
            ) : currentUser ? (
                <p>You are already signed in as {currentUser.email}</p>
            ) : (
                <div>
                    <form onSubmit={onSubmit}>
                                <div>
                                    <label>Email:</label>
                                    <input
                                        type='email'
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder="Enter Email ID"
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Password:</label>
                                    <input
                                        type='password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder='Enter Password'
                                        required
                                    />
                                </div>
                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                <button type="submit" disabled={isSigningIn}>
                                    {isSigningIn ? 'Signing Up...' : 'Sign Up'}
                                </button>
                            </form>
                            {/* Uncomment below if you want to enable Google sign-in */}
                            {/* <button onClick={onGoogleSignIn} disabled={isSigningIn}>
                        {isSigningIn ? 'Signing In...' : 'Sign In with Google'}
                    </button> */}
                        </div>
            )}
        </div>
    );
};

export default SignUp;
