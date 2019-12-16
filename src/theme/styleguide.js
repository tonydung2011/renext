import {UtilLib} from '@lib';
import Sizes from '../sizes';

export default {
  flex0: {
    flex: 0,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex7: {
    flex: 7,
  },
  flex6: {
    flex: 6,
  },
  flex8: {
    flex: 8,
  },
  flex9: {
    flex: 9,
  },
  flex10: {
    flex: 10,
  },
  flex11: {
    flex: 11,
  },
  columnFlex: {
    flexDirection: 'column',
  },
  rowFlex: {
    flexDirection: 'row',
  },
  container: {},
  fullScreen: {
    height: Sizes.screen.height,
    width: Sizes.screen.width,
  },
  fullWith: {
    width: Sizes.screen.width,
  },
  fullHeight: {
    height: Sizes.screen.height,
  },
  hiddenScreen: {
    height: 0,
    width: 0,
  },
  rowHeight: {
    height: Sizes.screen.height / 12,
  },
  undefinedScreen: {
    width: undefined,
    height: undefined,
  },
  flexStartContent: {
    justifyContent: 'flex-end',
  },
  flexEndContent: {
    justifyContent: 'flex-end',
  },
  middleContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyContent: {
    justifyContent: 'center',
  },
  alignContent: {
    alignItems: 'center',
  },
  bottomContent: {
    justifyContent: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
  spaceAroundContent: {
    justifyContent: 'space-around',
  },
  spaceBetweenContent: {
    justifyContent: 'space-between',
  },
  loadingWrap: {
    width: Sizes.screen.width,
    height: Sizes.screen.height,
    position: 'absolute',
    zIndex: 999,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  loadingViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stretchCenterContent: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  stretchItems: {
    alignItems: 'stretch',
  },
  pad2: {
    padding: 2,
  },
  padLeft2: {
    paddingLeft: 2,
  },
  padRight2: {
    paddingRight: 2,
  },
  padTop2: {
    paddingTop: 2,
  },
  padBottom2: {
    paddingBottom: 2,
  },
  pady2: {
    paddingVertical: 2,
  },
  padx2: {
    paddingHorizontal: 2,
  },
  pad5: {
    padding: 5,
  },
  padLeft5: {
    paddingLeft: 5,
  },
  padRight5: {
    paddingRight: 5,
  },
  padTop5: {
    paddingTop: 5,
  },
  padBottom5: {
    paddingBottom: 5,
  },
  pady5: {
    paddingVertical: 5,
  },
  padx5: {
    paddingHorizontal: 5,
  },
  pad10: {
    padding: 10,
  },
  padLeft10: {
    paddingLeft: 10,
  },
  padRight10: {
    paddingRight: 10,
  },
  padTop10: {
    paddingTop: 10,
  },
  padBottom10: {
    paddingBottom: 10,
  },
  pady10: {
    paddingVertical: 10,
  },
  padx10: {
    paddingHorizontal: 10,
  },
  pad15: {
    padding: 15,
  },
  padLeft15: {
    paddingLeft: 15,
  },
  padRight15: {
    paddingRight: 15,
  },
  padTop15: {
    paddingTop: 15,
  },
  padBottom15: {
    paddingBottom: 15,
  },
  pady15: {
    paddingVertical: 15,
  },
  padx15: {
    paddingHorizontal: 15,
  },
  pady8: {
    paddingVertical: 8,
  },
  padTop20: {
    paddingTop: 20,
  },
  padBottom20: {
    paddingBottom: 20,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginVer8: {
    marginVertical: 8,
  },
  marginHor8: {
    marginHorizontal: 8,
  },
  marginx15: {
    marginHorizontal: 15,
  },
  absoluteView: {
    position: 'absolute',
  },
  noBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  headerPadding: {
    paddingHorizontal: 10,
    paddingTop: (UtilLib.isDeviceInShouldHaveTopMargin() ? 10 : 0) + 30,
  },
  selfAlignContent: {
    alignSelf: 'stretch',
  },
  rounding: {
    borderRadius: 50,
  },
};
