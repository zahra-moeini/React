import React,{PureComponent} from "react";
import { createRef } from "react";

class PureCompo extends PureComponent{
    constructor(){
        super()
        this.state={
            name:""
        }
        this.counter=0
        this.myinput=createRef()
    }
    handleChangeName=()=>{
        this.setState({
            name :this.myinput.current.value
        })
    }
    componentDidMount(){
        this.myinput.current.focus()
    }
    render(){
   
        return(
            <div>
                <h4>حدث کلمه</h4>
                <input ref={this.myinput} type="text"
                autoComplete="off" />

                <button onClick={this
                .handleChangeName}>ثبت</button>

                <button onClick={()=>{this.myinput.current.value=""}}>مخفی</button>

                <br/>
                <span>{this.counter ++}</span>
            </div>
        )
    }
}
export default PureCompo