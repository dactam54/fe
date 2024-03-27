import actionTypes from "../actions/actionTypes";

const initState = {
    alert: '',
    callback: '',
    isLoading: false,
    isAdmin: false,
    location: null,
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ALERT:
            return {
                ...state,
                alert: action.alert,
                callback: action.callback || null
            }
        case actionTypes.LOADING:
            return {
                ...state,
                isLoading: action.flag
            }
        case actionTypes.ADMIN:
            return {
                ...state,
                isAdmin: action.flag
            }
        default:
            return state;
    }
}

export default appReducer;