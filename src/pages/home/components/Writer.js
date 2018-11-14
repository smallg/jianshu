import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { WriterWrapper, WriterTitle, WriterSwitch, WriterList, WriterItem } from '../style';

class Writer extends PureComponent {
    render() {
        const {list, handleChangeAuthor} = this.props;
        return (
                <WriterWrapper>
                    <WriterTitle>
                        <span>推荐作者</span>
                        <WriterSwitch onClick={() => handleChangeAuthor(this.spinIcon)}>
                            <i className="iconfont" ref={(icon) => {
                                this.spinIcon = icon
                            }}>&#xe851;</i>换一批
                        </WriterSwitch>
                    </WriterTitle>
                    <WriterList>
                        {list.map((item) => {
                            return (
                                    <WriterItem key={item.get('id')}>
                                        <img className="avatar" src={item.get('avatar_source')} alt=""/>
                                        <div className="follow">
                                            <i className="iconfont i-follow">&#xe632;</i>关注
                                        </div>
                                        <div className="name">{item.get('nickname')}</div>
                                        <p>写了{item.get('total_wordage')}字 · {item.get('total_likes_count')}喜欢</p>
                                    </WriterItem>
                            )
                        })}
                    </WriterList>
                </WriterWrapper>
        );
    }
}

const initMapStateToProps = (state) => ({
    list: state.getIn(['home', 'writerList'])
});

const initMapDispatchToProps = (dispatch) => {
    return {
        handleChangeAuthor(icon) {
            const originAngle = icon.style.transform.replace(/[^0-9]/ig, '');
            icon.style.transform = `rotate(${parseInt(originAngle || 0) + 360}deg)`;
            dispatch(actionCreators.getWriterList());
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Writer);