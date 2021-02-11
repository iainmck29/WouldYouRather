import React from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends React.Component {

    render() {
        const { users } = this.props
        console.log(users)

        return (

            <div className="question">
                <div className="question-avatar">
                    <img
                        src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
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

function mapStateToProps({ users, questions }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(QuestionPreview)