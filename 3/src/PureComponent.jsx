import React,{PureComponent} from "react";

class PureCompo extends PureComponent{
    constructor(){
        super()
        this.state={
            name:""
        }
        this.counter=0
    }
    handleChangeName=()=>{
        this.setState({
            name : document.getElementById('myinput').value
        })
    }
    render(){
        return(
            <div>
                <h4></h4>
            </div>
        )
    }
}