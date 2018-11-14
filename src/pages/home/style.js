import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const BackTop = styled.div`
  position: fixed;
  bottom: 30px;
  right: 100px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #dcdcdc;
  .iconfont{
    font-size: 20px;
  }
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListWrapper = styled.div`
  .split-line{
    margin: -5px 0 15px;
    border-top: 1px solid #f0f0f0;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333; 
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
    margin-bottom: 8px;
  }
  .bottom {
    color: #b4b4b4;
    float: left;
    font-size: 12px;
    margin-right: 10px;
    .iconfont {
      font-size: 12px;
    }
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  cursor: pointer;
`;

export const DownloadAppWrapper = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .title {
      font-size: 15px;
      color: #333;
    }
    .desc {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
    .iconfont {
      margin-left: 5px;
    }
  }
`;

export const WriterWrapper = styled.div`
  margin-bottom: 20px;
  font-size: 13px;
  text-align: center;
`;

export const WriterTitle = styled.div`
  text-align: left;
  color: #969696;
`;

export const WriterSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .iconfont {
    display: block;
    float:left;
    font-size: 12px;
    margin-right: 2px;
    margin-top:2px;
    transition: all .3s linear;
    transform-origin: center center;
  }
`;

export const WriterList = styled.ul`
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
`;

export const WriterItem = styled.li`
  overflow: hidden;
  margin-top: 15px;
  line-height: 20px;
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    display: block;
    cursor: pointer;
  }
  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
    .i-follow {
      vertical-align: bottom;
    }
  }
  .name {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
    cursor: pointer;
  }
  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`;
