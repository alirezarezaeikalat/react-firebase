import React from 'react';
import { NavLink } from 'react-router-dom';
const SignedOutLinks = () => {
    return (

        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Sign up</NavLink></li>
            <li><NavLink to="/">Login</NavLink></li>
        </ul>
    );
}

export default SignedOutLinks;