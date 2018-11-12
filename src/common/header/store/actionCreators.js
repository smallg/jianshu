import * as actionTypes from "./actionTypes";
import { fromJS } from 'immutable';
import axios from 'axios';

export const getInputFocusAction = () => ({
    type: actionTypes.INPUT_FOCUS
});

export const getInputBlurAction = () => ({
    type: actionTypes.INPUT_BLUR
});

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
});
// use redux-thunk
export const getSearchList = () => {
    return (dispatch) => {
        axios.get('http://localhost:3002/api/header-list').then((res) => {
            const data = res.data;
            dispatch(changeList(data));
        }).catch(() => {
            console.log('error');
        });
    }
};