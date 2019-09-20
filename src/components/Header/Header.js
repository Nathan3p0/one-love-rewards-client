import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="main__header">
            <nav className="main__header-nav">
                <Link to="/"><h1>One Love Rewards</h1></Link>
            </nav>
        </header>
    )
}

export default Header