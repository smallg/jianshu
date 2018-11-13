import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import ArticleList from './components/ArticleList';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import DownloadApp from './components/DownloadApp';

class Home extends PureComponent {
    componentDidMount() {
        this.props.getHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }

    render() {
        return (
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img' alt='' src='https://upload.jianshu.io/admin_banners/web_images/4550/a4aba36241eb146c13892301e486417cbf16af18.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                        <Topic/>
                        <ArticleList/>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend/>
                        <DownloadApp/>
                        <Writer/>
                    </HomeRight>
                    {this.props.showScrollTop ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
                </HomeWrapper>
        );
    }
}

const initMapStateToProps = (state) => ({
    showScrollTop: state.getIn(['home', 'showScrollTop'])
});

const initMapDispatchToProps = (dispatch) => {
    return {
        getHomeData() {
            dispatch(actionCreators.getHomeData());
        },
        changeScrollTopShow() {
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleScrollTopShow(true));
            } else {
                dispatch(actionCreators.toggleScrollTopShow(false));
            }
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Home);