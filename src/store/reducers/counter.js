import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === actionTypes.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === actionTypes.ADDITION) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === actionTypes.SUBTRACT) {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    return state;
};

export default reducer;