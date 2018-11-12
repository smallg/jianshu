import * as actionTypes from "./actionTypes";

const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === actionTypes.INPUT_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === actionTypes.INPUT_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}