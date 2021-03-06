import React,{Component } from 'react';
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      days : 0,
      hours : 0,
      minutes : 0,
      seconds :0
    }
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline),1000);
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes =Math.floor((time/1000/60)%60);
    const hours =Math.floor((time/1000/60/60) % 24);
    const days =Math.floor((time/1000/60/60/24));

    this.setState({days:days,hours:hours,minutes:minutes,seconds:seconds})
  }
  leading0(num){

    return(num < 10 ? '0' + num : num);



  }

  render(){
    return(
      <div className = 'content'>
      <div className = 'Clock-days'><div className = 'number'>{this.leading0(this.state.days)}</div> Days</div>
      <div className = 'Clock-hours'><div className = 'number'>{this.leading0(this.state.hours)}</div> Hours</div>
      <div className = 'Clock-minutes'><div className = 'number'>{this.leading0(this.state.minutes)}</div> Minutes</div>
      <div className = 'Clock-seconds'><div className = 'number'>{this.leading0(this.state.seconds)}</div> Seconds</div>
    </div>

    )
  }


}

export default Clock;
