import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const {handleGoogleSignIn} = useFirebase()
    return (
        <div className='login'>
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
                    />{" "}
                    <br />
                    <input
                        type="password"
                        name="password2"
                        placeholder="re-enter password"
                        id=""
                    />
                    <br />
                    <button type="submit">Register Account</button>
                </form>
                <span>
                    Already Registered? <NavLink to="/login"> Login</NavLink>
                </span>
                <div>---------- or ----------</div>
                <br />
                <button onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;