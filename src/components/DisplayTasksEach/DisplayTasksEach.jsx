import React from 'react';
import {useDispatch} from 'react-redux';
//material ui
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function DisplayTasksEach({task}){
    //define dispatch
    const dispatch= useDispatch()
    //function triggers dispatch to complete a tasks
    const completeTask =()=>{
        //send id of the task to be completed
        dispatch({type:"COMPLETE_TASK", payload:task.id})
    }   //end completeTask
    //function triggers dispatch to delete a task
    const deleteThisTask=()=>{
        //send id of the task to be deleted
        dispatch({type:"DELETE_TASK", payload:task.id})
    }   //end deleteThisTask
    //define formatteddate
    let formattedDate;
    //function to make timestamp look nicer
    const dateFormat=()=>{
        //if the task is completed give the formatted version of the completed time.
        if(task.date_completed){
            formattedDate = task.date_completed.slice(0,16)
        }
        return formattedDate;
    }   //end dateFormate
    //return a row of the task information
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