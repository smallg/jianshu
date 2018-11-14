import * as actionTypes from "./actionTypes";
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    showScrollTop: false,
    writerList: []
});

const changeHomeData = (state, action) => {
    return state.merge({
        'topicList': action.topicList,
        'articleList': action.articleList,
        'recommendList': action.recommendList
    });
};

const addArticleData = (state, action) => {
    return state.set('articleList', state.get('articleList').concat(action.data));
};

const showScrollTop = (state, action) => {
    return state.set('showScrollTop', action.show);
};

const changeWriterData = (state, action) => {
    return state.set('writerList', action.data);
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case actionTypes.ADD_ARTICLE_DATA:
            return addArticleData(state, action);
        case actionTypes.TOGGLE_SCROLL_SHOW:
            return showScrollTop(state, action);
        case actionTypes.CHANGE_WRITER_DATA:
            return changeWriterData(state, action);
        default:
            return state;
    }
}