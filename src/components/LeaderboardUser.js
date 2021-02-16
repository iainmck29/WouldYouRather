import React from 'react'
import { connect } from 'react-redux'

class LeaderboardUser extends React.Component {

    render() {
        const { user } = this.props
        const questionsAsked = user.questions.length
        const questionsAnswered = Object.keys(user.answers).length

        return (

            <div className="question">
                <div className="question-avatar">
                    <img
                        src={user.avatarURL}
                        alt="pic of avatar"
                        className="question-avatar-image" />
                    <div className="question-avatar-caption">
                        {user.name}
                    </div>
                </div>
                <div className="question-info">
                    <h3>Leaderboard results</h3>
                    <div className="question-text-preview">
                        <div>
                            Total questions asked: {questionsAsked}
                        </div>
                        <div>
                            Total questions answered: {questionsAnswered}
                        </div>
                        <div>
                            Total: {questionsAsked + questionsAnswered}
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

function mapStateToProps({ users }, props) {
    const { id } = props
    const user = users[id]
    return {
        user,
    }
}

export default connect(mapStateToProps)(LeaderboardUser)