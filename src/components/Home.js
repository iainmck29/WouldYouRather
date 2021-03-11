import React from 'react'
import QuestionPreview from './QuestionPreview'
import { connect } from 'react-redux'
import AnswerPreview from './AnswerPreview'

class Home extends React.Component {
    state = {
        answered: false
    }

    handleChange = e => {
        this.setState((prevState) => ({
            answered: prevState.answered === false ? true : false
        }))
    }

    render() {
        const { questIDs, users, authedUser } = this.props
        return (
            <div>

                <div className="app-container">

                    <h2 className="question-header">Questions</h2>
                    <button name="answered" disabled={this.state.answered === true} onClick={this.handleChange}>View Answered</button>
                    <button name="unanswered" disabled={this.state.answered === false} onClick={this.handleChange}>View Unanswered</button>
                    <ul style={{ display: this.state.answered === true ? 'none' : 'block' }} className="question-list">
                        {questIDs.map((id) => (
                            Object.keys(users[authedUser].answers).includes(id)
                                ? ''
                                :
                                <li style={{ display: this.state.answered === true ? 'none' : 'block' }} key={id}>
                                    <QuestionPreview id={id} />
                                </li>
                        ))}
                    </ul>
                    <ul style={{ display: this.state.answered === false ? 'none' : 'block' }} className="question-list">
                        {questIDs.map((id) => (
                            !Object.keys(users[authedUser].answers).includes(id)
                                ? ''
                                :
                                <li style={{ display: this.state.answered === false ? 'none' : 'block' }} key={id}>
                                    <AnswerPreview id={id} />
                                </li>
                        ))}
                    </ul>
                </div>
            </div>

        )

    }
}

function mapStateToProps({ questions, users, authedUser }) {
    return {
        questions,
        users,
        authedUser,
        questIDs: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)