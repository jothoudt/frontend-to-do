import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from '../AddTask/AddTask'
import DisplayTasks from '../DisplayTasks/DisplayTasks';

function Home(){
    
    const dispatch=useDispatch()
    //get tasks from the store
    const tasks= useSelector((store)=>{return store.list})
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