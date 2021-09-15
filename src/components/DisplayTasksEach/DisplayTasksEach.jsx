import React from 'react';
import {useDispatch} from 'react-redux';

function DisplayTasksEach({task}){
    const dispatch= useDispatch()
    const completeTask =()=>{
        dispatch({type:"COMPLETE_TASK", payload:task.id})
    }
    let formattedDate = task.date_completed.slice(0,16)
    return(
        <>
            <td>{task.task}</td>
            <td>{task.date_added}</td>
            {task.completed ? <td>&#10003;</td> : <td><button onClick={completeTask}>Complete</button></td>}
            {task.date_completed === null ? <td>Not yet completed</td> : <td>{formattedDate}</td>}
        </>
    )
}

export default DisplayTasksEach;