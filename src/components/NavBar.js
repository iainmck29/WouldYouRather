import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="nav-text">
                    Home
                    </div>
                <div className="nav-text">
                    Add
                    </div>
                <div className="nav-text">
                    Leaderboard
                    </div>
                <div className="nav-text">
                    UserName
                    </div>
                <div className="nav-username">
                    Logout
                    </div>



            </div>
        )
    }
}

export default NavBar