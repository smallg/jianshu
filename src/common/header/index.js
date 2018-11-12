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
        const {focused, list} = this.props;
        if (focused) {
            return (
                    <SearchInfo>
                        <SearchInfoTitle>热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            {list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })}
                        </SearchInfoList>
                    </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        const {focused, handleInputFocus, handleInputBlur} = this.props;
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
                                               onFocus={handleInputFocus}
                                               onBlur={handleInputBlur}/>
                                </CSSTransition>
                                <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
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
        list: state.getIn(['header', 'list'])
    };
};

const initMapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getSearchList());
            dispatch(actionCreators.getInputFocusAction());
        },
        handleInputBlur() {
            dispatch(actionCreators.getInputBlurAction());
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Header);