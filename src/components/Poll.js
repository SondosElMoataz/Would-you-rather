import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


class Poll extends Component{
    
    render(){
        const { authedUser,
            question,
            user,id } = this.props
        const {  optionOne, optionTwo} = question
         const {avatarURL, name} = user
        return(
            <Link to={`/questions/${id}`}  className='poll'>
            <img 
            className='avatar'
            src={avatarURL}
            alt={`Avatar of ${name}`}/>
            <div>  
            <p>{name} asks:
            Would You Rather ....</p>
            {}
            <p >{optionOne.text}</p>
                <p>OR</p>
             <p >{optionTwo.text}</p>
             </div>

            </Link>
            )
    }
}
function mapStateToProps ({authedUser, users,questions},{ id }){
    const question = questions[id];
    const user = users[question.author]
   
    return {
        id,
        authedUser,
        question,
        user,
    }
}
export default withRouter(connect(mapStateToProps)(Poll))