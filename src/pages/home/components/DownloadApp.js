import React, { PureComponent } from 'react';
import { DownloadAppWrapper } from '../style';

class DownloadApp extends PureComponent {
    render() {
        return (
                <div>
                    <DownloadAppWrapper>
                        <img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                        <div className="info">
                            <div className="info">下载简书手机App<i className="iconfont">&#xe646;</i></div>
                            <div className="desc">随时随地发现和创作内容</div>
                        </div>
                    </DownloadAppWrapper>
                </div>
        );
    }
}

export default DownloadApp;