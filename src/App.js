import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style'
import { IconStyle } from './statics/iconfont/iconfont';
import Header from "./common/header";
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
    render() {
        return (
                <Fragment>
                    <Provider store={store}>
                        <BrowserRouter>
                            <Fragment>
                                <Header/>
                                <Route path='/' exact component={Home}></Route>
                                <Route path='/detail/:id' exact component={Detail}></Route>
                            </Fragment>
                        </BrowserRouter>
                    </Provider>
                    <GlobalStyle/>
                    <IconStyle/>
                </Fragment>
        );
    }
}

export default App;
