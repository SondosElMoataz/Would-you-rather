import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {handleAddAnswer} from '../actions/shared'
 class PollPage extends Component {
     state ={
         selected:''
     }

     handleChange = (e)=>{
        this.setState({selected:e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        
        const answer = this.state.selected
        const {dispatch, authedUser,id} = this.props
        const qid = id
        // ({ authedUser, qid, answer })
        dispatch(handleAddAnswer({ authedUser, qid, answer }))

    }
    render() {
        const { authedUser,
            question,
            user,isAnswered } = this.props
        
            if ( !question ) {
                return <Redirect to= '/notFound' />
              }

        const { optionOne, optionTwo } = question
        const { avatarURL, name } = user
        const userAnswer = question.optionOne.votes.includes(authedUser) ? optionOne: optionTwo
        
        const totalVotes = optionOne.votes.length + optionTwo.votes.length
        

        if(isAnswered === false)
        return (
            <div className='poll'>
            <form  onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <img 
            className='avatar'
            src={avatarURL}
            alt={`Avatar of ${name}`}/>
                <div>
                    <p>{name} asks:
                        Would You Rather ....</p>
                </div>
                <input type='radio' id='optionOne' name='answer' value='optionOne'/>
                {optionOne.text}
                <input type='radio' id='optionTwo' name='answer' value='optionTwo'/>
                {optionTwo.text}
                <input type="submit" value="Submit"/>

                </form>
            </div>
        )
        else if (isAnswered === true)
        return  (
            <div className='poll'>
            <img 
            className='avatar'
            src={avatarURL}
            alt={`Avatar of ${name}`}/>
                <div>
                    <p>{name} asks:
                        Would You Rather ....</p>
                </div>
            <div>
            {optionOne.text}
            <progress value = {optionOne.votes.length} max = {totalVotes}> </progress>
            <p className='votes-info'> {optionOne.votes.length} out of {totalVotes} </p>
            <p className='votes-info'> {((optionOne.votes.length/totalVotes).toFixed(2)*100)}%  </p>
            {userAnswer === optionOne ? <div>Voted </div>:  <div></div> }
            </div>
           
            <div>
           
            {optionTwo.text}
            <progress value = {optionTwo.votes.length} max = {totalVotes}> </progress>
            <p className='votes-info'> {optionTwo.votes.length} out of {totalVotes} </p>
            <p className='votes-info'> {((optionTwo.votes.length/totalVotes).toFixed(2)*100)}%  </p>
            {userAnswer === optionTwo ? <div>Voted </div>:  <div></div> }
            </div>
            </div>

        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params
    const question = questions[id];
    const user = question ? users[question.author] : null
    const isAnswered = Object.keys(users[authedUser].answers).includes(id)

    return {
        id,
        authedUser,
        question,
        user,
        isAnswered

    }


}

export default connect(mapStateToProps)(PollPage)