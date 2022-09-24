import { ADD_TODO } from "./actiontype"; 

 const initstate = {
    todos : [
        {
            id:1,
            title: "LEARN REDUX",
            status: false
        }
    ]
 };


const reducer = (state = initstate, {type,payload}) =>{
    switch (type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        }
        default :
        return state;
    }
}


export {reducer}