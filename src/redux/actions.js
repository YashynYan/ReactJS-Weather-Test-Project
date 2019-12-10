import { SET_CITY } from "./actionTypes";

export const setCity = city =>({
    type: SET_CITY,
    payload: {city}
});