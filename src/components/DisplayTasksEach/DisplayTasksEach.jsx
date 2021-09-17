import React from 'react';
import {useDispatch} from 'react-redux';
//material ui
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function DisplayTasksEach({task}){
    const dispatch= useDispatch()
    const completeTask =()=>{
        dispatch({type:"COMPLETE_TASK", payload:task.id})
    }

    let formattedDate;
    const dateFormat=()=>{
        if(task.date_completed){
            formattedDate = task.date_completed.slice(0,16)
        }
        return formattedDate;
    }
    return(
        <TableRow style={ task.completed ? {backgroundColor:'#F037A5'} : {backgroundColor:'#F8F8F8'}}>
            <TableCell align="right">{task.task}</TableCell>
            <TableCell align="right">{task.date_added}</TableCell>
            {task.completed ? <TableCell align="right">&#10003;</TableCell> : <TableCell align="right"><Button onClick={completeTask}>Complete</Button></TableCell>}
            {task.date_completed === null ? <TableCell align="right" >Not yet completed</TableCell> : <TableCell align="right">{dateFormat()}</TableCell>}
            <TableCell align="right"></TableCell>
        </TableRow>
    )
}

export default DisplayTasksEach;