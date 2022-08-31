import { useContext } from "react";
import Item from "./item";
import { TestContext } from "./test.Context";

const TimeList =(props)=>{
    const context=useContext(TestContext)
    return(
        <div>
            {context.timeArr.map((element)=>(
                <Item key={Math.random()}>
                    {element}
                    </Item>
            ))}
        </div>
    )
}
export default TimeList;