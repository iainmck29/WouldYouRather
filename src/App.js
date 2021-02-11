import React from 'react'
import Login from './components/Login'
import { connect } from 'react-redux'
import handleInitialData from './actions/shared'
import Home from './components/Home'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default connect()(App);
