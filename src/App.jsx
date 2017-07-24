import React,{ Component } from 'react'
import './App.css'
import Clock from './Clock.jsx'
import {Form,FormControl,Button} from 'react-bootstrap'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25,2017',
      newDeadline: ''
      }

    }
  changeDeadline(){
      this.setState({deadline : this.state.newDeadline})

    }



  render(){
    return(<div className = 'App'>
    <div className = 'App-title'>Countdown to {this.state.deadline}</div>

    <Clock deadline = {this.state.deadline}/>

    <Form inline >
    <FormControl className = 'formcontrol' onChange = {event => this.setState({newDeadline:event.target.value})} placeholder = "New Date"/>
    <Button className = 'formbutton' onClick={() => this.changeDeadline()}>Submit</Button>
  </Form>
  <h1 className="format">Please enter the date with this format: month day,year </h1>
    </div>)
  }



}

export default App;
