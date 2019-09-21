import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="main__header">
            <nav className="main__header-nav">
                <ul>
                    <li>
                        <Link to="/"><h1>ONE LOVE REWARDS</h1></Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header