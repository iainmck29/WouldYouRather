import React from 'react'
import LeaderboardUser from './LeaderboardUser'
import { connect } from 'react-redux'


class Leaderboard extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h1>Leaderboard</h1>
                <ul className="question-list">
                    {this.props.orderedUsers.map((userID) => (
                        <li key={userID}>
                            <LeaderboardUser id={userID} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users, }) {
    return {
        orderedUsers: Object.keys(users)
            .sort((a, b) => (Object.keys(users[b].answers).length
                + users[b].questions.length)
                - (Object.keys(users[a].answers).length
                    + users[a].questions.length))
    }
}

export default connect(mapStateToProps)(Leaderboard)