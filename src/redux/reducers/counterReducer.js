
import { DECREMENT, INCREMENT, RESET } from '../actions/actionTypes'

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.payload };
        case DECREMENT:
            return { ...state, count: state.count - action.payload };
        case RESET:
            return { ...state, count: action.payload.defaultNum }
        default:
            return { ...state };
    }
};

export default counterReducer;