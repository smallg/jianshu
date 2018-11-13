import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from "./store";
import {
    HeaderWrapper,
    LimitWidth, Logo,
    Nav,
    NavItem,
    NavSearch,
    ButtonGroup,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style';

class Header extends Component {

    getListArea() {
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if (jsList.length) {
            for (let i = ((page - 1) * 10); i < (page === totalPage ? jsList.length : page * 10); i++) {
                pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
            }
        }
        if (focused || mouseIn) {
            return (
                    <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <SearchInfoTitle>热门搜索
                            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                                <i className="iconfont spin" ref={(icon) => {
                                    this.spinIcon = icon
                                }}>&#xe851;</i>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        const {focused, list, handleInputFocus, handleInputBlur} = this.props;
        return (
                <HeaderWrapper>
                    <LimitWidth>
                        <Logo/>
                        <ButtonGroup>
                            <Button className='reg'>注册</Button>
                            <Button className='writing'><i className='iconfont'>&#xe601;</i>写文章</Button>
                        </ButtonGroup>
                        <Nav className='container'>
                            <NavItem className='left active'>首页</NavItem>
                            <NavItem className='left'>下载App</NavItem>
                            <NavItem className='right'>登录</NavItem>
                            <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                            <SearchWrapper>
                                <CSSTransition in={focused} timeout={200} classNames='slide'>
                                    <NavSearch className={focused ? 'focused' : ''}
                                               onFocus={() => {
                                                   handleInputFocus(list)
                                               }}
                                               onBlur={handleInputBlur}/>
                                </CSSTransition>
                                <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60c;</i>
                                {this.getListArea()}
                            </SearchWrapper>
                        </Nav>
                    </LimitWidth>
                </HeaderWrapper>
        )
    }
}

const initMapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    };
};

const initMapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size===0){
                dispatch(actionCreators.getSearchList());
            }
            dispatch(actionCreators.getInputFocusAction());
        },
        handleInputBlur() {
            dispatch(actionCreators.getInputBlurAction());
        },
        handleMouseEnter() {
            dispatch(actionCreators.getMouseEnterAction());
        },
        handleMouseLeave() {
            dispatch(actionCreators.getMouseLeaveAction());
        },
        handleChangePage(page, totalPage, spin) {
            const originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            spin.style.transform = `rotate(${parseInt(originAngle || 0) + 360}deg)`;
            let currentPage = 1;
            if (page < totalPage) {
                currentPage = page + 1;
            }
            dispatch(actionCreators.getChangePageAction(currentPage));
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Header);