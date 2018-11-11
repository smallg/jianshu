import styled from 'styled-components';
import logoPng from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height: 57px;
    border-bottom: 1px solid #f0f0f0;
`;

export const LimitWidth = styled.div`
    min-width: 768px;
    max-width: 1440px;
    height:100%;
    margin: 0 auto;
`;

export const Logo = styled.a.attrs({href: '/'})`
    float: left;
    width: 100px;
    height: 58px;
    background: url(${logoPng});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 100%;
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    color: #333;
    line-height: 56px;
    padding:0 15px;
    font-size: 17px;
    &.left{
    float: left;
    }
    &.right{
    float: right;
    color: #969696;
    }
    &.active{
      color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
`;

export const ButtonGroup = styled.div`
    float: right;
    width: 200px;
    margin-top: 9px;
`;

export const Button = styled.a`
    float:left;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    &.reg {
      color: #ec6149;
      margin-right: 20px;
    }
    &.writing {
      color: #fff;
      background: #ec6149;
    }
`;
