import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import { connect } from 'react-redux'
import handleInitialData from '../actions/shared'
import Home from './Home'
import Add from './Add'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard'
import Logout from './Logout'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <NavBar />
        {this.props.loading
          ? null
          :
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/login" component={Login} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/logout" component={Logout} />
            {console.log(this.props.loading)}
          </div>
        }
      </Router >
    );
  }
}

function mapStateToProps({ users, }) {
  return {
    loading: Object.keys(users).length === 0
  }
}

export default connect(mapStateToProps)(App);
