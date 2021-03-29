import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <div className="nav">
            <h1>
                CodeSplash
            </h1>
            <div className="nav--menu">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        My Playlist
                    </li>
                </ul>
                <button>Dark</button>
            </div>
        </div>
    )
}

export default Navbar
