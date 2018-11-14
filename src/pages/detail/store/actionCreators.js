import * as actionTypes from "./actionTypes";
import { fromJS } from 'immutable';
import axios from "axios";

const changeDetailData = (data) => ({
    type: actionTypes.CHANGE_DETAIL_DATA,
    title: fromJS(data.title),
    content: fromJS(data.content)
});

export const getDetail = () => {
    return (dispatch) => {
        axios.get('http://localhost:3002/api/detail').then((res) => {
            const data = res.data;
            dispatch(changeDetailData(data));
        }).catch(() => {
            console.log('error');
        });
    }
};