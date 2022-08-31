import { useContext } from "react";
import { TestContext } from "./test.Context";

const Item=(props)=>{ 
    const Context=useContext(TestContext)

    const handleDeleteItem=(e)=>{
        Context.setTimeArr(Context.timeArr.filter(t=>t != e.target.innerText))
    }
    return(
        <div onClick={handleDeleteItem}>
            {props.children}
        </div>
    )
}
export default Item;