import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from '../AddTask/AddTask'
import DisplayTasks from '../DisplayTasks/DisplayTasks';

function Home(){
    //define dispatch
    const dispatch=useDispatch()
    //get tasks from the store
    const tasks= useSelector((store)=>{return store.list})
    //to load the tasks from the database
    useEffect(()=>
        dispatch({type:'FETCH_TASKS'})
        ,[]);
        
    return(
        <div className="main-page">
            <div>
                <AddTask />
            </div>
            <div>
                <DisplayTasks tasks={tasks} />
            </div>
        </div>
    )
}
export default Home;