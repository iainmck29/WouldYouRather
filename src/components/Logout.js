import React from 'react'
import { connect } from 'react-redux'
import handleUserSelection from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Logout extends React.Component {
    state = {
        redirect: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/")
            this.props.dispatch(handleUserSelection(null))
        }, 2000);
    }

    render() {


        return (
            <div className="logout">
                <h1>You have successfully logged out</h1>
                <h2>You will be redirected to login</h2>
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