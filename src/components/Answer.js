import React from 'react'
import { connect } from 'react-redux'
import { handleUserAnswer } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class Answer extends React.Component {
    state = {
        toHome: false,
        answered: false,
    }

    handleSubmit = (e) => {
        //determine which button user clicked and handle appropriately
        const { dispatch, authedUser, id } = this.props
        e.preventDefault()


        const answer = e.target.name
        const qid = id
        const answerData = {
            qid,
            authedUser,
            answer
        }


        dispatch(handleUserAnswer(answerData))

        this.setState(() => ({
            toHome: true,
        }))



    }

    componentDidMount() {
        const { question, users, authedUser } = this.props

        for (let answer of Object.keys(users[authedUser].answers)) {
            if (answer === question.id) {
                this.setState(() => ({
                    answered: true
                }))
                alert('you have already answered this question!')
            }
        }
    }





    render() {
        const { question, users } = this.props
        const asker = users[question.author]
        const { invalid } = this.props


        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }

        if (invalid) {
            return (
                <div>
                    <h1>Question not found</h1>
                </div>
            )
        }

        return (
            <div>
                <div className="app-container">
                    <div className="add-container">
                        <img
                            src={asker.avatarURL}
                            alt="pic of user"
                            className="question-avatar-image" />
                        <div>
                            {asker.name} asks would you rather?
                        </div>
                        <button className="btn" onClick={this.handleSubmit} name="optionOne" disabled={this.state.answered === true} type='submit'>{question.optionOne.text}</button>
                        <div>
                            OR
                        </div>
                        <button className="btn" onClick={this.handleSubmit} disabled={this.state.answered === true} name="optionTwo" type='submit'>{question.optionTwo.text}</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {
    const { id } = props.match.params
    const question = questions[id]

    if (question === undefined) {
        return {
            invalid: true
        }
    }


    return {
        question,
        users,
        authedUser,
        id
    }
}

export default connect(mapStateToProps)(Answer)