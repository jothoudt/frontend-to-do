import React from 'react'
import {useSelector} from 'react-redux';
import DisplayTasksEach from '../DisplayTasksEach/DisplayTasksEach';
//material ui
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function DisplayTasks({tasks}){
    //function to conditionally render taks to prevent racing issues
    const displayAllTasks=()=>{
        //define display
        let display=''
        //if there are no tasks or the tasks have not loaded yet
        if(!tasks){
            display= <h2>No tasks</h2>
        }
        //if there are tasks, map through them and display them as rows in the table
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
    //returns a table to display the tasks
    return(
        <Box border={1} borderColor="#1E3163" style={{marginLeft:"auto", marginRight:"auto", width:"80%", marginTop:'50px'}}>
            <Table>
                <TableHead style={{backgroundColor:"#1E3163"}}>
                    <TableRow border={1} borderColor="#1E3163">
                        <TableCell align="right" style={{color:"#f8f8f8"}}>Task</TableCell>
                        <TableCell align="right" style={{color:"#f8f8f8"}}>Date Added</TableCell>
                        <TableCell align="right" style={{color:"#f8f8f8"}}>Completed?</TableCell>
                        <TableCell align="right" style={{color:"#f8f8f8"}}>Date Completed</TableCell>
                        <TableCell align="right" style={{color:"#f8f8f8"}}>Delete Task</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayAllTasks()}
                </TableBody>
            </Table>         
        </Box>
    )
}

export default DisplayTasks;