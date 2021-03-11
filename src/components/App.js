import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import { connect } from 'react-redux'
import handleInitialData from '../actions/shared'
import Home from './Home'
import Add from './Add'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard'
import Logout from './Logout'
import Answer from './Answer'
import NotFound from './404'


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
          : (this.props.authedUser === null)
            ? <div><Route component={Login} /></div>
            :
            (
              <div>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/add" exact component={Add} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/leaderboard" exact component={Leaderboard} />
                  <Route path="/logout" exact component={Logout} />
                  <Route path="/answer/:id" exact component={Answer} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            )
        }
      </Router >
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    //This may need to be changed to authedUser as this is last action dispatched
    loading: Object.keys(questions).length === 0,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
