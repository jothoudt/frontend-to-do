//this reducer stores the values of the to do list
const listReducer = (state=[], action)=>{
    switch(action.type){
        case 'SET_LIST_ITEMS' :
            return action.payload;
        default:
            return state;
    }
}

export default listReducer;