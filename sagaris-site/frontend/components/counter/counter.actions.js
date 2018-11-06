import {INCREMENT, DECREMENT, RESET} from '../../redux/actiontypes'

export const incrementCount = () => dispatch => {
    return dispatch({ type: INCREMENT })
}

export const decrementCount = () => dispatch => {
    return dispatch({ type: DECREMENT })
}

export const resetCount = () => dispatch => {
    return dispatch({ type: RESET })
}
