import * as actionTypes from './actionsTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addition = (val) => {
    return {
        type: actionTypes.ADDITION,
        value: val
    }
}

export const subtract = (val) => {
    return {
        type: SUBTRACT,
        value: val
    }
}