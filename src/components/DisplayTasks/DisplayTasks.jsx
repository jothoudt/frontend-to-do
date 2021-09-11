import React from 'react'
import {useSelector} from 'react-redux';

function DisplayTasks(){
    //get tasks from the store
    const tasks= useSelector((store)=>{return store.list})
    //function to display tasks
    const displayAllTasks=()=>{
        let display=''
        if(!tasks.length){
            display= <h2>No tasks</h2>
        }
        else{
            display=
            <>
            {tasks.map((task, id)=>{
                return(
                    <DisplayTasks task={task} key={id} />
                )
            })}
            </>
        }
    }
    return(
        <div>
            {displayAllTasks()}
        </div>
    )
}

export default DisplayTasks;