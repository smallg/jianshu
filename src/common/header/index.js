import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { HeaderWrapper, LimitWidth, Logo, Nav, NavItem, NavSearch, ButtonGroup, Button, SearchWrapper } from './style';
import { actionCreators } from "./store";

const Header = (props) => {
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
                            <CSSTransition in={props.focused} timeout={200} classNames='slide'>
                                <NavSearch className={props.focused ? 'focused' : ''}
                                           onFocus={props.handleInputFocus}
                                           onBlur={props.handleInputBlur}></NavSearch>
                            </CSSTransition>
                            <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
                        </SearchWrapper>
                    </Nav>
                </LimitWidth>
            </HeaderWrapper>
    );
};

const initMapStateToProps = (state) => {
    return {
        focused: state.header.focused
    };
};

const initMapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getInputFocusAction());
        },
        handleInputBlur() {
            dispatch(actionCreators.getInputBlurAction());
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Header);