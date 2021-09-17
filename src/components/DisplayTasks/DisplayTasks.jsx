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