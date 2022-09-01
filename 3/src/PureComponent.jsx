import React,{PureComponent} from "react";
import { PureComponent } from "react";

// class PureCompo extends PureComponent{
//     render(){
//         console.log("puerComponet");
//         return(
//             <h2> {"pure component :" + this.props.name}</h2>
//         )
//     }
// }

// export default PureCompo;

const PureCompo=(props)=>{
    return(
        <h2>{"pure component :" + props.name}</h2>
    )
}

export default memo(PureCompo)