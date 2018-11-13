import * as actionTypes from "./actionTypes";
import { fromJS } from 'immutable';
import axios from 'axios';

const changeHomeData = (data) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList)
});

const AddArticleData = (data) => ({
    type: actionTypes.ADD_ARTICLE_DATA,
    data: fromJS(data)
});

export const toggleScrollTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show
});

// use redux-thunk
export const getHomeData = () => {
    return (dispatch) => {
        axios.get('http://localhost:3002/api/home-data').then((res) => {
            const data = res.data;
            dispatch(changeHomeData(data));
        }).catch(() => {
            console.log('error');
        });
    }
};

export const getMoreArticleList = () => {
    return (dispatch) => {
        axios.get('http://localhost:3002/api/article-list').then((res) => {
            const data = res.data;
            dispatch(AddArticleData(data));
        }).catch(() => {
            console.log('error');
        });
    }
};