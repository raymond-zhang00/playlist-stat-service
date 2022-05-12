import React, { useState } from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav class="navbar">
            <div>Playlist Statistics</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;