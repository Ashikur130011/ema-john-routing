import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const{handleGoogleSignIn} = useFirebase()
    return (
        <div className="login">
            <div>
                <h1>Login Here</h1>
                <form>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        id=""
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        id=""
                    />
                    <br />
                    <button type="submit">Login</button>
                </form>
                <span>
                    New User? <NavLink to="/register"> Register</NavLink>
                </span>
                <div>---------- or ----------</div>
                <br />
                <button onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;