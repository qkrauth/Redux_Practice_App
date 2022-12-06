import {createStore} from "redux";

let initialState = {
    count: 0,
    name: "Quinten",
    list: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREASE":
            return {...state, count: state.count + 5}
        case "DECREASE":
            return {...state, count: state.count - 1}
        case "CHANGENAME":
            return {...state, name: action.payload}
        case "ADDITEM":
            return {...state, list: [...state.list, action.payload]}
        default:
            return state
    }
};

const store = createStore(reducer)

export default store;