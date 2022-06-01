import { ALL_CAR_FAIL,ALL_CAR_REQUEST,ALL_CAR_SUCCESS,CLEAR_ERROR } from "../constants/carConstants";

import axios from 'axios'


export const getAllCars = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_CAR_REQUEST })

        let link = '/api/v1/cars'
        

        const { data } = await axios.get(link)
console.log(data)
        dispatch({
            type: ALL_CAR_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_CAR_FAIL,
            payload: error.response.data.message
        })
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}