import React ,{useEffect, useState} from 'react';
import './style.css';
import Hello from './Hello';
import Timer from './Time';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       title:"hello love Friend"
//     }

//     // this.handleSetTitle=this.handleSetTitle.bind(this)
//   }

//   handleSetTitle=()=>{
//     this.setState({
//       title:"welcome into codeyd"
//     })
//   }

//   // handleSetTitle(){
//   //   this.setState({
//   //     title:"welcome into codeyd"
//   //   })
//   // }

 

//     render(){
//       return(
//         <div className='main'>
//          <Hello title={this.state.title}/>
//           <Timer handleSetTitle={this.handleSetTitle}/>
  
//         </div>
//       )
//     }
//   }

const App=()=>{
  const [title,setTitle]=useState("Hello my dear friend ")

  const [isLight , setIsLight] = useState(false);

  useEffect(()=>{
    console.log('useEffect');
    return()=>{
      
    }
  },[isLight])

  const handleSetIsLight=()=>{
    setIsLight(!isLight)
  }

  return(
    <div className='main' style={{background:isLight ? "white" : "black"}}>
      <Hello title={title}/>
      <Timer isLight={isLight} handleSetIsLight={handleSetIsLight}/>
    </div>
  )
}

  export default App;