import React from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends React.Component {

    render() {
        const { currUser, questions } = this.props
        console.log('the current questions are', questions)
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
                        <p>
                            new text
                        </p>
                    </div>
                </div>
            </div>


        )
    }

}

function mapStateToProps({ users, questions, authedUser }) {
    const currUser = users['johndoe']
    const currQuest = questions['8xf0y6ziyjabvozdd253nd']
    return {
        currUser,
        questions

    }
}

export default connect(mapStateToProps)(QuestionPreview)