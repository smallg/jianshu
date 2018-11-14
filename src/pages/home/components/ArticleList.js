import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { ListWrapper, ListItem, ListInfo, LoadMore } from '../style';

class ArticleList extends PureComponent {

    render() {
        const {list, getMoreArticleList} = this.props;
        return (
                <ListWrapper>
                    <div className='split-line'></div>
                    {list.map((item) => {
                        return (
                                <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                                    <ListItem>
                                        <img className='pic' src={item.get('imgUrl')} alt=''/>
                                        <ListInfo>
                                            <h3 className='title'>{item.get('title')}</h3>
                                            <p className='desc'>{item.get('desc')}</p>
                                            <div className='bottom'>{item.get('author')}</div>
                                            <div className='bottom'><i className="iconfont">&#xe648;</i>{item.get('replyNum')}</div>
                                            <div className='bottom'><i className="iconfont">&#xe755;</i>{item.get('praise')}</div>
                                        </ListInfo>
                                    </ListItem>
                                </Link>
                        );
                    })}
                    <LoadMore onClick={getMoreArticleList}>阅读更多</LoadMore>
                </ListWrapper>
        );
    }
}

const initMapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList'])
});

const initMapDispatchToProps = (dispatch) => {
    return {
        getMoreArticleList() {
            dispatch(actionCreators.getMoreArticleList())
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(ArticleList);