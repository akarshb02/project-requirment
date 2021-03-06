import React, { Component, } from 'react'

class Message extends Component {

 constructor() {
  super()
 this.state = {
   message : 'welcome'
 }
 }


  handleChange() {

  this.setState({message:'changed'})
 
 }
render() {
 return (
  <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.handleChange()}>click</button>
  </div>
 )
}
 
}


export default Message
