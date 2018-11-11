import React, { Component } from 'react';
import { HeaderWrapper, LimitWidth, Logo, Nav, NavItem, NavSearch, ButtonGroup,Button } from './style';


class Header extends Component {
    render() {
        return (
                <HeaderWrapper>
                    {/*<Logo href='/'/>*/}
                    <LimitWidth>
                        <Logo/>
                        <ButtonGroup>
                            <Button className='reg'>注册</Button>
                            <Button className='writing'>写文章</Button>
                        </ButtonGroup>
                        <Nav className='container'>
                            <NavItem className='left active'>首页</NavItem>
                            <NavItem className='left'>下载App</NavItem>
                            <NavItem className='right'>登录</NavItem>
                            <NavItem className='right'>Aa</NavItem>
                            <NavSearch></NavSearch>
                        </Nav>
                    </LimitWidth>
                </HeaderWrapper>
        );
    }
}

export default Header;