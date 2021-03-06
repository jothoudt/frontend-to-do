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
    //format date for date_added. *This is needed for the java backend version
    const dateAddedFormat=()=>{
        //define formatted date_added
        let formattedDateAdded=''
        let thisDate= task.date_added
        // if there are no tasks or tasks haven't loaded yet
        if(!thisDate){
            formattedDateAdded=''
        }   //end if 
        //checks how long the string is. if it is too long slice it.
        //PYTHON version is already formatted response from the server and the length is 29
        else if(thisDate.length === 29 && thisDate[28] ==='T'){
            formattedDateAdded= thisDate.slice(0.16)
        }
        else {
            formattedDateAdded= thisDate.slice(0,10)
        }   //end else
        return formattedDateAdded;
    }
    //define formatteddate
    let formattedDate;
    //function to make timestamp look nicer
    const dateCompleteFormat=()=>{
        let completeDate=task.date_completed;
        if(!completeDate){
            formattedDate=''
        }
        else if(completeDate.length === 18){
            formattedDate=task.date_completed;
        }
        //if the task is completed give the formatted version of the completed time.
        else if(task.date_completed){
            formattedDate = task.date_completed.slice(0,16)
        }
        return formattedDate;
    }   //end dateFormate
    //return a row of the task information
    return(
        <TableRow style={ task.completed ? {backgroundColor:'#F037A5'} : {backgroundColor:'#F8F8F8'}}>
            <TableCell style={ task.completed ? 
                {textDecoration:'line-through',fontSize:"large", fontFamily:'Courgette, cursive'} : 
                {textDecoration:'none', fontSize:"large", fontFamily:'Courgette, cursive'}}>{task.task}
            </TableCell>
            <TableCell style={ task.completed ? 
                {textDecoration:'line-through',fontSize:"large", fontFamily:'Courgette, cursive'} : 
                {textDecoration:'none',fontSize:"large", fontFamily:'Courgette, cursive'}}  align="right">{dateAddedFormat()}
            </TableCell>
            {task.completed ? 
                <TableCell style={{color:'green', fontSize:"36px"}} align="right">&#10003;</TableCell> : 
                <TableCell align="right">
                    <Button onClick={completeTask} style={{backgroundColor:"#1E3163", color:"#F8F8F8"}}>Complete</Button>
                </TableCell>
            }
            {task.date_completed === null ? 
                <TableCell style={{fontSize:"large", fontFamily:'Courgette, cursive'}} align="right" >Not yet completed</TableCell> : 
                <TableCell style={{fontSize:"large", fontFamily:'Courgette, cursive'}}align="right">{dateCompleteFormat()}</TableCell>
            }
            <TableCell align="right"> <DeleteForeverIcon onClick={deleteThisTask} style={{fontSize:"36px"}} /> </TableCell>
        </TableRow>
    )
}

export default DisplayTasksEach;