import React from 'react';
import './style.css';
import Hello from './Hello';
import Timer from './Time';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      title:"hello love Friend"
    }

    // this.handleSetTitle=this.handleSetTitle.bind(this)
  }

  handleSetTitle=()=>{
    this.setState({
      title:"welcome into codeyd"
    })
  }

  // handleSetTitle(){
  //   this.setState({
  //     title:"welcome into codeyd"
  //   })
  // }

 

    render(){
      return(
        <div className='main'>
         <Hello title={this.state.title}/>
          <Timer handleSetTitle={this.handleSetTitle}/>
  
        </div>
      )
    }
  }

  export default App;