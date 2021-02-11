import React from 'react'
import NavBar from './NavBar'
import QuestionPreview from './QuestionPreview'
import { connect } from 'react-redux'

class Home extends React.Component {
    render() {
        return (
            <div>
                {this.props.loading === true ?
                    null :
                    <div>
                        <NavBar />

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

function mapStateToProps({ users }) {
    return {
        loading: users === null
    }
}

export default connect(mapStateToProps)(Home)