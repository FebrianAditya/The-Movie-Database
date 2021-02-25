import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const initialState = {
    dataMovie: {},
    dataTv: {},
    dataPeople: {}
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "GET_MOVIES":
            return { ...state, dataMovie: action.payload }
        case "GET_TV":
            return { ...state, dataTv: action.payload }
        case "GET_PEOPLE":
            return { ...state, dataPeople: action.payload }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store