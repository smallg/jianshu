import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {
    render() {
        const {login, handleLogin} = this.props;
        if (!login) {
            return (
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder="账号" ref={(input) => {
                                this.account = input
                            }}/>
                            <Input placeholder="密码" type="password" ref={(input) => {
                                this.password = input
                            }}/>
                            <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
                        </LoginBox>
                    </LoginWrapper>
            );
        } else {
            return <Redirect to='/'/>
        }

    }
}

const initMapStateToProps = (state) => ({
    login: state.getIn(['login', 'login'])
});

const initMapDispatchToProps = (dispatch) => {
    return {
        handleLogin(accountEle, passwordEle) {
            dispatch(actionCreators.login(accountEle.value, passwordEle.value));
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Login);