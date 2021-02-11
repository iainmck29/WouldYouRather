import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <nav className="nav">
                <NavLink to="/" exact className="nav-text">
                    Home
                    </NavLink>
                <NavLink to="/add" className="nav-text">
                    Add
                    </NavLink>
                <NavLink to="/leaderboard" className="nav-text">
                    Leaderboard
                    </NavLink>
                <div className="nav-text">
                    UserName
                    </div>
                <NavLink to="/logout" className="nav-username">
                    Logout
                    </NavLink>




            </nav>
        )
    }
}

export default NavBar