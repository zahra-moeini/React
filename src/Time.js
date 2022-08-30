import React from 'react';
// import ReactDOM from 'react-dom/client';
import './style.css';

var interval;

class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        hour:0,
        minute:0,
        second:0,
        inStart:false
      }
    }


    startInterval=()=>{
      if(this.state.inStart=== false){
        this.setState({
          inStart:true
        })
        interval= setInterval(()=>{
          this.setState({
            second: this.state.second +1
          })
          if(this.state.second === 60){
            this.setState({
              second:0,
              minute:this.state.minute+1
            })
          }
          if(this.state.minute === 60){
            this.setState({
              minute:0,
              hour:this.state.hour+1
            })
          }
        },1000)
      }
    }

    stopInterval=()=>{
      this.setState({
        inStart:false
      })
      clearInterval(interval);
    }

    resetInterval=()=>{
      this.stopInterval();
      this.setState({
        hour:0,
        minute:0,
        second:0,
      })
    }



    render(){
      let h=this.state.hour
      let m=this.state.minute
      let s=this.state.second

      return(
        <div>
          <h2 className='timer'>
            {`${h > 9 ? h : "0"+h} : ${m > 9 ? m:"0"+m} : ${s > 9 ? s:"0"+s}`}
          </h2>
  
          <button onClick={this.props.handleSetIsLight}
          style={{
            background:this.props.isLight ? "black" : "white",
            color:this.props.isLight ? "white" : "black"
          }}
          >
            {this.props.isLight ? "dark" :"light"}
            </button>

          <button onClick={this.startInterval}>start</button>
          <button onClick={this.stopInterval}>stop</button>
          <button onClick={this.resetInterval}>reset</button>

        </div>
      )
    }
  }

export default Timer;  