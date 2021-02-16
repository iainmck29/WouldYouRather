import React from 'react'
import { connect } from 'react-redux'
import handleUserSelection from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    state = {
        userSelection: '',
        toHome: false
    }


    handleChange = (e) => {
        const selection = e.target.value
        this.setState(() => ({
            userSelection: selection
        }))
    }

    handleSelection = e => {
        e.preventDefault()
        const { userSelection } = this.state
        this.props.dispatch(handleUserSelection(userSelection))
        //Redirect user to homepage
        this.setState(() => ({
            toHome: true
        }))
    }

    render() {
        const { userIDs, users } = this.props

        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            //This will return the login box
            <div className="login">
                <h3 className='game-title'>
                    Would You Rather?
                </h3>
                <h4 className="form-title">
                    Select User
                    <div>
                        <form onSubmit={this.handleSelection}>
                            <select onChange={this.handleChange} className="select-user"
                                defaultValue='Select'>
                                <option disabled value='Select'>Select user
                                </option>
                                {userIDs.map((user) => (
                                    <option key={user} value={user}>{users[user].name}</option>
                                ))}
                            </select>
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div >
                </h4>
            </div>
        )
    }


}

function mapStateToProps({ users, authedUser }) {
    const userIDs = Object.keys(users)
    const userNames = []
    for (let user of userIDs) {
        userNames.push(users[user].name)
    }
    return {
        userIDs,
        users
    }
}



export default connect(mapStateToProps)(Login)