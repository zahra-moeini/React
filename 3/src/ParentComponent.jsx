import React, { Component } from "react";
import { createRef } from "react";
import PureCompo from "./PureComponent";

class ParentCompo extends Component{

    constructor(){
        super()
        this.componentRef=createRef()
    }

    handleChangeCompoName=()=>{
        this.componentRef.current.handleChangeName()
    }

    render(){
        console.log(this.componentRef);
        return(
            <div>
                <PureCompo ref={this.componentRef}/>
                <button onClick={this.handleChangeCompoName}>test</button>
            </div>
        )
    }
}
export default ParentCompo;