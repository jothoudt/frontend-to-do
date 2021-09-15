import React from 'react';

function DisplayTasksEach({task}){
    return(
        <div>
            <p>{task.task}</p>
            {task.completed ? <p>&#10003;</p> : <button>Complete</button>}
        </div>
    )
}

export default DisplayTasksEach;