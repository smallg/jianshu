import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';

class Detail extends PureComponent {
    componentDidMount() {
        this.props.getDetail();
    }

    render() {
        const {title, content} = this.props;
        return (
                <DetailWrapper>
                    <Header>{title}</Header>
                    <Content dangerouslySetInnerHTML={{__html: content}}/>
                </DetailWrapper>
        );
    }
}

const initMapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const initMapDispatchToProps = (dispatch) => {
    return {
        getDetail() {
            dispatch(actionCreators.getDetail());
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(withRouter(Detail));