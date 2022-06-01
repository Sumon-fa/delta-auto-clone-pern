import { ALL_CAR_REQUEST } from "../constants/carConstants";
import { ALL_CAR_SUCCESS } from "../constants/carConstants";
import { ALL_CAR_FAIL } from "../constants/carConstants";
import { CLEAR_ERRORS } from "../constants/carConstants";

export const carReducer=(state={cars:[]},action)=>{
    switch (action.type) {
        case ALL_CAR_REQUEST:
            return {
                loading: true,
                cars: []
            }

        case ALL_CAR_SUCCESS:
            return {
                loading: false,
                cars: action.payload.cars,
                carCount: action.payload.carCount,
                
            }

        
        case ALL_CAR_FAIL:
        
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}