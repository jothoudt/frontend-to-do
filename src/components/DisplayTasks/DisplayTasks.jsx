import React from 'react'
import {useSelector} from 'react-redux';

function DisplayTasks(){
    const tasks= useSelector((store)=>{return store.list})

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