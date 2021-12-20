import React, { Component } from 'react'
import {connect} from 'react-redux'
import Poll from './Poll'
class Dashboard extends Component {

  state={
    questionsToView:[]
  }
  

  handleButton = (e)=>{
    e.preventDefault()

     const { questionsIds,authedUser,users} = this.props

    const answeredQuestions = Object.keys(users[authedUser].answers)
    const unAnsweredQuestion = questionsIds.filter(qid => !answeredQuestions.includes(qid))
    
    if (e.target.value ==='answered')
     {this.setState({ 
       questionsToView : answeredQuestions })}
    else {
      this.setState({ 
        questionsToView : unAnsweredQuestion }) 
    }
  }

  componentDidMount(){
    const { questionsIds,authedUser,users} = this.props
    const unAnsweredQuestion = questionsIds
    .filter(qid =>
       !Object.keys(users[authedUser].answers)
    .includes(qid))
    
    this.setState({ 
      questionsToView : unAnsweredQuestion })

  }
    render() {
      const {questionsToView} = this.state
      return (
        <div className='dashboard-list'>
          <h3 >Your Dashboard</h3>

          <button  
          className='dashboard-btn' 
          value = 'unAnswered' 
          onClick={this.handleButton}> Unanswered Polls </button>

          <button  
          className='dashboard-btn' 
          value = 'answered'   
          onClick={this.handleButton}> Answered Polls </button>


          <ul >
          {questionsToView.map((id) => (
            <li key={id} >
              <Poll id = {id} />
            </li>
          ))}
        </ul>
        </div>
      )
    }
  }
  
  function mapStateToProps ({ authedUser,users,questions }) {
    return {
        questionsIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        users,
        authedUser,
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)