import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function AddTask(){
    //define dispatch
    const dispatch=useDispatch()
    const [task, setTask]=useState('')
    //function to take the task and send it to the database;
    const addNewTask=()=>{
        dispatch({type:'ADD_NEW_TASK', payload:{task:task}})
        alert('Task successfully added')
    }
    return(
        <div>
            <Box border={1} borderColor="#F037A5" boxShadow={12} style={{width:"400px", marginTop:"50px", marginLeft:"auto", marginRight:"auto", padding:"25px"}}>
                <h2>Add A Task:</h2>
                    <label>
                        <strong>Task Name:  </strong>
                        <input type="text" onChange={(event)=>setTask(event.target.value)}></input>
                    </label>
                <div>
                    <Button style={{backgroundColor:"#F037A5", marginTop: "24px", fontSize: "large"}} onClick={addNewTask}>Add Task</Button>
                </div>
            </Box>
        </div>
    )
}

export default AddTask