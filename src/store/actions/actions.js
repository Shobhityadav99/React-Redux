export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const ADDITION='ADDITION';
export const SUBTRACT='SUBTRACT';
export const STORE_RESULT='STORE_RESULT';
export const DEL_RESULT='DEL_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const addition = (val) => {
    return {
        type: ADDITION,
        value: val
    }
}

export const subtract = (val) => {
    return {
        type: SUBTRACT,
        value: val
    }
}

export const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const deleteResult = (resID) => {
    return {
        type: DEL_RESULT,
        resultId: resID
    }
}