import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import smallLogo from '../Intro/images/small-logo.png'

const Header = () => {
    return (
        <header className="main__header">
            <nav className="main__header-nav">
                <Link to="/"><h1>ONE LOVE REWARDS</h1></Link>
            </nav>
        </header>
    )
}

export default Header