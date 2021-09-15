import {put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function* listSaga(){
    yield takeEvery('FETCH_TASKS', fetchTasks);
    yield takeEvery('ADD_NEW_TASK', addTasks);
    yield takeEvery('COMPLETE_TASK', completeTask)
}

function* addTasks(action){
    try{
        console.log("in POST tasks")
        yield axios.post('/api/tasks', action.payload)
        yield put({type:'FETCH_TASKS'})
    }
    catch(error){
        console.log('error in POST task', error)
    }
}

function* fetchTasks(){
    try{
        console.log('in GET tasks')
        const response= yield axios.get('/api/tasks')
        console.log(response.data)
        yield put ({type:'SET_TASKS', payload:response.data})
    }
    catch(error){
        console.log('error in GET tasks', error)
    }
}
function* completeTask(action){
    try{
        console.log('in Complete task',action.payload)
        yield axios.put('/api/tasks/' + action.payload )
        yield put({type:'FETCH_TASKS'})
    }
    catch(error){
        console.log('error in complete task', error)
    }
}

export default listSaga;