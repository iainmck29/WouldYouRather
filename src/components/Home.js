import React from 'react'
import NavBar from './NavBar'
import QuestionPreview from './QuestionPreview'
import { connect } from 'react-redux'
import Loading from './Loading'

class Home extends React.Component {
    render() {

        return (
            <div>

                <div className="app-container">

                    <h2 className="question-header">Questions</h2>
                    <div className="question-list">
                        <QuestionPreview />

                    </div>
                </div>
                }

            </div>
        )
    }
}


export default connect()(Home)