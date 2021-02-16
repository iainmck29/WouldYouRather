import React from 'react'
import NavBar from './NavBar'
import QuestionPreview from './QuestionPreview'
import { connect } from 'react-redux'
import Loading from './Loading'

class Home extends React.Component {
    render() {

        const { questIDs } = this.props
        return (
            <div>

                <div className="app-container">

                    <h2 className="question-header">Questions</h2>
                    <ul className="question-list">
                        {questIDs.map((id) => (
                            <li key={id}>
                                <QuestionPreview id={id} />
                            </li>
                        ))}

                    </ul>
                </div>
                }

            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questIDs: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)