import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = () => {
    return (
        <nav className="naw-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">AppMan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default Navbar;