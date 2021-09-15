import React from 'react'
import {useSelector} from 'react-redux';
import DisplayTasksEach from '../DisplayTasksEach/DisplayTasksEach';

function DisplayTasks({tasks}){
    //function to display tasks
    const displayAllTasks=()=>{
        let display=''
        if(!tasks){
            display= <h2>No tasks</h2>
        }
        else{
            display=
            <>
            {tasks.map((task, id)=>{
                return(
                    <DisplayTasksEach task={task} key={id} />
                )
            })}
            </>
        }
        return display;
    }
    return(
        <div>
            {displayAllTasks()}
        </div>
    )
}

export default DisplayTasks;