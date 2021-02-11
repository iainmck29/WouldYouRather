import React from 'react'
import NavBar from './NavBar'
import QuestionPreview from './QuestionPreview'
import { connect } from 'react-redux'
import Loading from './Loading'

class Home extends React.Component {
    render() {

        console.log(this.props)
        return (
            <div>
                {this.props.loading === true ?
                    <Loading /> :
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
        loading: users === {}

    }
}

export default connect(mapStateToProps)(Home)