import React from 'react';
// import ReactDOM from 'react-dom/client';
import './style.css';

class Text extends React.Component{
    render(){
      console.log(this.props);
      return(
          <h1>{this.props.title}</h1>
      )
    }
  }
  
export default Text;  