import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {handleAddPoll} from '../actions/shared'
class NewPoll extends Component {
    state = {
        optionOneText :'',
        optionTwoText:'',
        toHome: false,
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
      };
      handleSubmit = (e)=>{
        e.preventDefault()
        const {optionOneText,optionTwoText} = this.state
        
        const {dispatch,author } = this.props
        
        dispatch(handleAddPoll({optionOneText,optionTwoText,author}))
        this.setState(()=>({
            optionOneText: '',
            optionTwoText:'',
            toHome:true
        }))
    }
    render() {
        const {optionOneText,optionTwoText,toHome} = this.state
        if (toHome === true) {
            return <Redirect to='/' />
          }   
        return(
            <div>
             <form  onSubmit={this.handleSubmit} className='new-poll-form'>
             <div> Would you rather....  </div>
             <div className='new-options'>
             <input type="text"
              placeholder =  "Option 1 "
              value={optionOneText}
             onChange={this.handleChange}
             id="optionOneText" name="optionOne"
             
              />
              <input type="text"
              placeholder =  "Option 2 "
              value={optionTwoText}
             onChange={this.handleChange}
             id="optionTwoText" name="optionTwo"
             
              />
             </div>
             <div> 
             <button className='submit-poll-btn' type = 'submit' disabled = {optionOneText === ''|| optionTwoText === ''}>Submit </button>
             </div>
             
              </form>
            </div>
        )
    }
}
function mapStateToProps({ authedUser }) {
    return {
        author:authedUser
    };
  }

export default connect(mapStateToProps)(NewPoll);