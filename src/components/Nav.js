import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { Component } from 'react/cjs/react.production.min'
import { setAuthedUser } from '../actions/authedUser'

class  Nav extends Component { 

  handleClick = (e)=>{
    this.props.dispatch(setAuthedUser('NOUSER'))
    // this.forceUpdate();

  }
 
  render(){

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Poll
            </NavLink>
            
          </li>
          <li>
          <NavLink to='/leaderBoard' activeClassName='active'>
            LeaderBoard
          </NavLink>
          
        </li>
        {this.props.username &&  <div>
          <li> Hello {this.props.username}</li> 
         <button
         onClick={this.handleClick}>
           Log out </button>
          </div>}

     
        </ul>
      </nav>
    )
  } 
  }
 function mapStateToProps({ authedUser,users }){
   if (authedUser=== null || authedUser === 'NOUSER'){
     return {
       username: null
     }
   }
   return {
    
     username: users[authedUser].name,
   }

 }
export default connect(mapStateToProps)(Nav)