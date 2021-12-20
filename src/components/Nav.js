import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Component } from 'react/cjs/react.production.min'

class  Nav extends Component {
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
        {this.props.username && <li> <div>Hello {this.props.username}</div></li>}
     
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