import React, { Component } from 'react'
import { connect } from 'react-redux'

 class NotFound extends Component {
    render() {
        return (
            <div className='not-found'>
                We are very sorry the page you are looking for seems to be unavailable
            </div>
        )
    }
}

export default connect()(NotFound)