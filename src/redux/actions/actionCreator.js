import { INCREMENT, DECREMENT, RESET } from './actionTypes'

//Action Creator
export const increment = () => ({
   type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const reset = ()=>({
    type:RESET
})