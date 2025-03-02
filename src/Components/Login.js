import React from 'react';
import {Auth} from '../Config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
    return (
        <div>
            <h4>Login</h4>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Login;