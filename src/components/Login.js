import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setAuthedUser}  from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
class Login extends Component{

    state ={
        selected:'',
        toHome:false
    }

    handleChange= (e)=>{
        this.setState({
            selected:e.target.value});
      }
      
    handleSubmit = (e)=>{
        e.preventDefault()
    
         const {selected} =this.state
         const {dispatch} =this.props   
         dispatch(setAuthedUser(selected))
        
            this.setState({
                toHome: true,
               })       
        }

    render(){
        const {users} = this.props
        const {selected,toHome }= this.state

        if (toHome === true) {
            return <Redirect to='/' />
          }    
        return(
	
            <div className='login-form'>
                <div>Choose a username </div>
                <form onSubmit={this.handleSubmit} >
                    <div >
                        <select 
                        placeholder="Select Username" 
                        value={selected}
                        onChange={this.handleChange} 
                        name="username"  >
                        <option value="" disabled  hidden >select your username</option>
                            {Object.keys(users).map((id) => (
                                <option key={id} value={id}>{users[id].name}</option>
                            ))}
                        </select>
                        <button type="submit" className='login-btn'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps ({users}) {  
    return {
        users 
  }
}
export default connect(mapStateToProps)(Login);