import React from 'react'
import UserSelector from './UserSelector'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            //This will return the login box
            <div className="login">
                <h3 className='game-title'>
                    Would You Rather?
                </h3>
                <h4 className="form-title">
                    Select User
                    <UserSelector />
                </h4>
            </div>
        )
    }
}



export default Login