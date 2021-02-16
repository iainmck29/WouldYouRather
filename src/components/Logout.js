import React from 'react'
import { connect } from 'react-redux'
import handleUserSelection from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Logout extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.dispatch(handleUserSelection(null))
        }, 2000);
    }

    render() {
        return (
            <div className="logout">
                <h1>You have successfully logged out</h1>
                <button className="btn">Log Back In</button>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Logout)