import {Dimensions} from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;

// 这里的uiWidthPx   uiHeightPx  是你的设计稿的宽高尺寸
let uiWidthPx = 375;
let uiHeightPx = 750;

// 如果应用是横屏的用pTd
export const pTd = (uiElePx: number) => {
  return (uiElePx * deviceHeightDp) / uiHeightPx;
};

// 如果应用是竖屏的用pTx
export const pTx = (uiElePx: number) => {
  return (uiElePx * deviceWidthDp) / uiWidthPx;
};

// 字体大小
export const fsx = (uiElePx: number) => {
  return Math.max(pTx(uiElePx), 10);
};
