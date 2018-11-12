import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, LimitWidth, Logo, Nav, NavItem, NavSearch, ButtonGroup, Button, SearchWrapper } from './style';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    handleInputFocus() {
        this.setState({
            focused: true
        });
    }

    handleInputBlur() {
        this.setState({
            focused: false
        });
    }

    render() {
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
                                <CSSTransition in={this.state.focused} timeout={200} classNames='slide'>
                                    <NavSearch className={this.state.focused ? 'focused' : ''}
                                               onFocus={this.handleInputFocus}
                                               onBlur={this.handleInputBlur}></NavSearch>
                                </CSSTransition>
                                <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
                            </SearchWrapper>
                        </Nav>
                    </LimitWidth>
                </HeaderWrapper>
        );
    }
}

export default Header;