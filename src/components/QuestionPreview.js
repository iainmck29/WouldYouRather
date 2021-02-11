import React from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends React.Component {

    render() {
        const { users } = this.props
        console.log(users)

        return (
            <div>

                <div className="question">
                    <div className="question-avatar">
                        <img
                            src={users.johndoe.avatarURL}
                            alt="pic of avatar" />
                    </div>
                    <div className="question-info">
                        Would you rather?
                </div>
                </div>
                }
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