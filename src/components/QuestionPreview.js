import React from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends React.Component {

    render() {
        const { currUser } = this.props
        console.log(this.props)

        return (

            <div className="question">
                <div className="question-avatar">
                    <img
                        src={currUser.avatarURL}
                        alt="pic of avatar"
                        className="question-avatar-image" />
                    <div className="question-avatar-caption">
                        Iain McKenzie
                    </div>
                </div>
                <div className="question-info">
                    <h3>Would you rather?</h3>
                    <div className="question-text-preview">
                        <p>This is the text which will eventually show the question preview.
                        </p>
                    </div>
                </div>
            </div>


        )
    }

}

function mapStateToProps({ users, questions, authedUser }) {
    const currUser = users['johndoe']
    return {
        currUser
    }
}

export default connect(mapStateToProps)(QuestionPreview)