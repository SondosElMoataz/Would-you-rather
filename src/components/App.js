import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { LoadingBar } from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import NewPoll from './NewPoll'
import Login from './Login'
import PollPage from './PollPage'
import NotFound from './NotFound'
import Nav from './Nav'
import PrivateRoute from './PrivateRoute'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){ 
    return (<Router>
      <Fragment>
    <LoadingBar/>
    <Nav/>
    <div>
    {this.props.loading === true
      ? null
      // : <PollPage id = '6ni6ok3ym7mf1p33lnez' />}
      : <div> {! this.props.authed ? <Login/> :
        <div>
      
        <Route path ='/login' component={Login} />
        <Route path= '/' exact component={Dashboard} />
           <Route  path='/questions/:id'  component={PollPage}/>
           <Route   path='/add'  component={NewPoll} />
           <Route   path='/leaderboard'  component={LeaderBoard} />
           <Route path = '/notFound' component={NotFound}/>
      </div>
      }</div>
  }
    </div>
    
      </Fragment>
      </Router>
    
  )}
 
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authed : authedUser !== 'NOUSER'
  }
}

export default connect(mapStateToProps)(App)
