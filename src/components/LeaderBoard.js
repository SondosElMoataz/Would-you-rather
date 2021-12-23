import React, { Component } from 'react'
import { connect } from 'react-redux'

 class LeaderBoard extends Component {
    render() {
        const {sortedUsers} = this.props
        return (
            <div>
            <h3 className='leaderboard-heading'>LEADERBOARD </h3>
            <ul className='leaderboard-list'>
            {sortedUsers.map((user) => (
              <li key={user.id}>
              <div className='leaderboard-items'>
              <img 
              className='avatar'
              src={user.avatarURL}
              alt={`Avatar of ${user.name}`}/>
              <div className='leader-name'> {user.name}</div>

              <div className='score'>
              <div>Total Asked : {user.totalAsked}</div>
              <div>Total Answered : {user.totalAnswered}</div>
              </div>
              <div className='rank'>  Rank :{sortedUsers.indexOf(user) + 1} </div>
                </div>
              </li>
            ))}
          </ul> 
            </div>
        )
    }
}

function mapStateToProps({ users }){
   const sortedUsers = 
        Object.values(users).map( user =>({
        ...user,
        totalAnswered:  Object.keys(user.answers).length,
        totalAsked: user.questions.length,
        totalScore:  Object.keys(user.answers).length + user.questions.length

})).sort((a,b)=>b.totalScore - a.totalScore)
return {sortedUsers}
}
export default connect(mapStateToProps)(LeaderBoard)