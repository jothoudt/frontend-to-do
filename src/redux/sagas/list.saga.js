import {put,takeEvery} from 'redux-saga/effects';
import axios from 'axios'

function* listSaga(){
    yield takeEvery('FETCH_TASKS', fetchTasks)
}

function* fetchTasks(){
    try{
        console.log('in GET tasks')
    }
    catch(error){
        console.log('error in GET tasks', error)
    }
}

export default listSaga;