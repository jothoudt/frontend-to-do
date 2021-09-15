import React from 'react';

function DisplayTasksEach({task}){
    return(
        <>
            <td>{task.task}</td>
            <td>{task.date_added}</td>
            {task.completed ? <td>&#10003;</td> : <td><button>Complete</button></td>}
            {task.date_completed === null ? <td>Not yet completed</td> : <td>{task.date_completed}</td>}
        </>
    )
}

export default DisplayTasksEach;