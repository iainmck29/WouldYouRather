import React from 'react'
import LeaderBoardUser from './LeaderboardUser'

class Leaderboard extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h1>Leaderboard</h1>
                <div className="question-list">
                    <LeaderBoardUser />
                </div>
            </div>
        )
    }
}

export default Leaderboard