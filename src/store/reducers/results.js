import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: action.result})
        }
    }
    if (action.type === actionTypes.DEL_RESULT) {
        const updatedArray = state.results.filter(result => result.id !== action.resultId);
        return {
            ...state,
            results: updatedArray
        }
    }
    return state;
};

export default reducer;