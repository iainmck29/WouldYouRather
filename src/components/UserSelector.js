import React from 'react'
import { connect } from 'react-redux'
import handleUserSelection from '../actions/authedUser'

class UserSelector extends React.Component {
    state = {
        userSelection: 'Select'
    }



    handleSelection = e => {
        e.preventDefault()
        const selection = e.target.value
        this.props.dispatch(handleUserSelection(selection))
        //Redirect user to homepage
    }


    render() {
        const { userIDs, users } = this.props

        return (
            <div>
                <form onSubmit={this.handleSelection}>
                    <select className="select-user"
                        defaultValue='Select'>
                        <option disabled value='Select'>Select user</option>
                        {userIDs.map((user) => (
                            <option key={user} value={user} > {users[user].name}</option>
                        ))}
                    </select>
                    <button type="submit">SUBMIT</button>
                </form>
            </div >
        )
    }
}

function mapStateToProps({ users }) {
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

export default connect(mapStateToProps)(UserSelector)

//Users required as prop for iteration