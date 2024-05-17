import React, { useState } from 'react';
import "./SignIn.css";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../context/authContext';

const SignIn = () => {
    const { currentUser, loading } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                const result = await doSignInWithEmailAndPassword(email, password);
                console.log("Signed In : ", result.user.email);
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            doSignInWithGoogle().catch(err => {
                setErrorMessage(err.message);
                setIsSigningIn(false);
            });
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            {
                loading
            }
            {loading ? (
                <p>Loading...</p>
            ) : currentUser ? (
                <div>
                    <p>Welcome, {currentUser.email}!</p>
                </div>
            ) : (
                <div>
                    <h2>Sign In</h2>
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
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                            <button onClick={onGoogleSignIn} disabled={isSigningIn}>
                                {isSigningIn ? 'Signing In...' : 'Google Sign In'}
                            </button>
                        </div>
            )}
        </div>
    );
}

export default SignIn;
