import Item from "./item";

const TimeList =(props)=>{
    return(
        <div>
            {props.children.map((element)=>(
                <Item key={Math.random()}>
                    <ul>
                        <li>
                    {element}
                        </li>
                    </ul>
                    </Item>
            ))}
        </div>
    )
}
export default TimeList;