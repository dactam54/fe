import actionTypes from "../actions/actionTypes";

const initState = {
    updateCurrent: false,
    myLocation: []
}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CURRENT:
            return ({
                ...state,
                updateCurrent: !state.updateCurrent
            })
        case actionTypes.MY_LOCATION:
            return ({
                ...state,
                myLocation: action.payload
            })
        case actionTypes.REMOVE_LOCATION:
            return ({
                ...state,
                myLocation: []
            })

        case actionTypes.LOGOUT:
            return ({
                ...state,
                myLocation: []
            })
        default:
            return state;
    }
}
export default userReducer;