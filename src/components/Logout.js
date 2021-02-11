import React from 'react'

class Logout extends React.Component {
    render() {
        return (
            <div className="logout">
                <h1>You have successfully logged out</h1>
                <button className="btn">Log Back In</button>
            </div>
        )
    }
}

export default Logout