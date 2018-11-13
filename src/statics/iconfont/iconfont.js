import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1542072341792'); /* IE9*/
  src: url('./iconfont.eot?t=1542072341792#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1542072341792') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1542072341792#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;