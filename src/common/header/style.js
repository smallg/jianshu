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

export const Logo = styled.div`
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
    cursor: pointer;
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
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused {
      width: 250px;
    }
    &.slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 250px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  z-index: 1;
  .zoom {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 250px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0, .2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float:left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  font-size: 12px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 3px;
  cursor: pointer;
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
