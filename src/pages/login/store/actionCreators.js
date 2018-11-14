import * as actionTypes from "./actionTypes";
import { fromJS } from 'immutable';
import axios from "axios";

const changeDetailData = (data) => ({
    type: actionTypes.CHANGE_LOGIN_STATUE,
    data: fromJS(data)
});

export const logout = () => ({
    type: actionTypes.CHANGE_LOGIN_STATUE,
    data: fromJS(false)
});

export const login = (account, pwd) => {
    return (dispatch) => {
        axios.get(`http://localhost:3002/api/login?account=${account}&pwd=${pwd}`).then(() => {
            dispatch(changeDetailData(true));
        }).catch(() => {
            console.log('error');
            dispatch(changeDetailData(false));
        });
    }
};