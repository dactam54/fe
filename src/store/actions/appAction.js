import actionTypes from "./actionTypes";
import * as api from '../../api';

const getLocation = () => async (dispatch) => {
    try {
        const response = await api.apiGetAllLocation();
        if (response.error === 0) {
            dispatch({
                type: actionTypes.GET_LOCATION,
                data: response.data
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_LOCATION,
            data: null
        })
    }
}

export default getLocation;