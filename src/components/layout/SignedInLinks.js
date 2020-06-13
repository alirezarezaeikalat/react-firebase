import React from 'react';
import { NavLink } from 'react-router-dom';
const SignedInLinks = () => {
    return (

        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">New project</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">AR</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;