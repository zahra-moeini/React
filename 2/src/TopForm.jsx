import React, { useContext, useState } from 'react';
import { taskContext } from './taskContext';

const TopForm = ()=>{

    const [task,setTask]=useState("")

    const{taskItems,setTaskItems}=useContext(taskContext)

    const handleSetTask=(event)=>{
        setTask(event.target.value)
    }

    const handleAddTast=(event)=>{
        event.preventDefault()
        setTaskItems([...taskItems,{id:Math.random(),title:task,done:false}])
    }

    return(
        <>
            <h4 className="text-center text-info text_shdow">Welcome to my project</h4>
            <form onSubmit={handleAddTast}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control"  value={task}
                    onChange={handleSetTask}/>
                    <button type="submit" className="btn btn-success me-1">insert</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;