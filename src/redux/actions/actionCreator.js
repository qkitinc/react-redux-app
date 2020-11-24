import { INCREMENT, DECREMENT, RESET } from './actionTypes'

//Action Creator
export const increment = (payload) => ({
    type: INCREMENT,
    payload: payload
});

export const decrement = (dispatch, payload) => (
    dispatch({
        type: DECREMENT,
        payload: payload,
    })
);

export const reset = (defaultNum) => ({
    type: RESET,
    payload: { defaultNum }
})