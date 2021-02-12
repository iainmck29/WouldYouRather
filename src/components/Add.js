import React from 'react'
import { connect } from 'react-redux'
import handleNewQuestion from '../actions/questions'

class Add extends React.Component {

    state = {
        A: '',
        B: '',
    }


    handleChange = (e) => {
        //change the state depending on which value is being changed
        const val = e.target.name
        const text = e.target.value
        this.setState(() => ({
            [val]: text
        }))
    }

    handleSubmit = (e) => {
        //handle the submission by passing values to dispatch and calling correct api method
        e.preventDefault()

        const { A, B } = this.state
        const { authedUser } = this.props
        const question = {
            optionOneText: A,
            optionTwoText: B,
            author: authedUser
        }

        this.props.dispatch(handleNewQuestion(question))

    }

    render() {
        const { A, B } = this.state
        return (

            <div>

                <div className="app-container">
                    <div className="add-container">
                        <img
                            src="https://img.huffingtonpost.com/asset/5bb532403c000066000cd413.jpeg?ops=scalefit_630_noupscale"
                            alt="pic of user"
                            className="question-avatar-image" />
                        <div>
                            Hey, user
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="A" value={A} onChange={this.handleChange} className="question-input" placeholder="Would you rather A?" />
                            <div>
                                OR
                            </div>
                            <input type="text" name="B" value={B} onChange={this.handleChange} className="question-input" placeholder="Would you rather B?" />
                            <button type="submit" disabled={A === '' || B === ''}>Submit Question</button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    //Will need to add in authedUser eventually
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Add)