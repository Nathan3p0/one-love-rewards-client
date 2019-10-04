import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="main__header">
            <Link to="/"><h1>ONE LOVE REWARDS</h1></Link>
        </header>
    )
}

export default Header