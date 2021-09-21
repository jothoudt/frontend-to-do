import React from 'react';
import {useDispatch} from 'react-redux';
//material ui
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function DisplayTasksEach({task}){
    const dispatch= useDispatch()
    const completeTask =()=>{
        dispatch({type:"COMPLETE_TASK", payload:task.id})
    }
    const deleteThisTask=()=>{
        dispatch({type:"DELETE_TASK", payload:task.id})
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
            <TableCell style={ task.completed ? {textDecoration:'line-through'} : {textDecoration:'none'}} align="right">{task.task}</TableCell>
            <TableCell style={ task.completed ? {textDecoration:'line-through'} : {textDecoration:'none'}}  align="right">{task.date_added}</TableCell>
            {task.completed ? <TableCell style={{color:'green', fontSize:"36px"}} align="right">&#10003;</TableCell> : <TableCell align="right"><Button onClick={completeTask}>Complete</Button></TableCell>}
            {task.date_completed === null ? <TableCell align="right" >Not yet completed</TableCell> : <TableCell align="right">{dateFormat()}</TableCell>}
            <TableCell align="right"> <DeleteForeverIcon onClick={deleteThisTask} style={{fontSize:"36px"}} /> </TableCell>
        </TableRow>
    )
}

export default DisplayTasksEach;