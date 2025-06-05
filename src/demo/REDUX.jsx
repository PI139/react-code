import { createStore } from "redux";



// state
const abc = {
    message : ""
}

// reducer

function reducer(state = abc , action) {
    switch (action.type) {
        case "msg":
            return{
                ...state,
                message: "hello"
            }
            
            break;
    
        default:
            return state
            break;
    }
    
}

// store
const store = createStore(reducer)

export default store;
