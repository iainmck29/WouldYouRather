import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AnswerPreview extends React.Component {

    toQuestion = (e, id) => {
        e.preventDefault()
        //Reroute user to question to be answered
    }

    render() {
        const { currUser, id, currQuest } = this.props
        return (

            <div className="question">
                <div className="question-avatar">
                    <img
                        src={currUser.avatarURL}
                        alt="pic of avatar"
                        className="question-avatar-image" />
                    <div className="question-avatar-caption">
                        {currUser.name}
                    </div>
                </div>
                <div className="question-info">
                    <h3>Would you rather?</h3>
                    <div className="question-text-preview">
                        <p>{currQuest.optionOne.text} (Votes: {currQuest.optionOne.votes.length} {Math.round(currQuest.optionOne.votes.length / (currQuest.optionTwo.votes.length + currQuest.optionOne.votes.length) * 100)}% )</p>
                        <p>Or</p>
                        <p>{currQuest.optionTwo.text} (Votes: {currQuest.optionTwo.votes.length} {Math.round(currQuest.optionTwo.votes.length / (currQuest.optionTwo.votes.length + currQuest.optionOne.votes.length) * 100)}%)</p>
                    </div>
                    <Link to={`answer/${id}`}>
                        <button>Answer</button>
                    </Link>
                </div>
            </div>


        )
    }

}

function mapStateToProps({ users, questions, authedUser }, { id }) {
    const currQuest = questions[id]
    const currUser = users[currQuest.author]
    return {
        currQuest,
        currUser,
        id

    }
}

export default connect(mapStateToProps)(AnswerPreview)