/**
 *
 * WaterFallList
 *
 */

import { AppStyle } from '@theme/index';
import React from 'react';
import { View } from 'react-native';
import { WaterfallList } from 'react-native-largelist-v3';
import { NormalFooter } from 'react-native-spring-scrollview/NormalFooter';
import { NormalHeader } from 'react-native-spring-scrollview/NormalHeader';
// import PropTypes from 'prop-types';

function WaterFallList({
  data,
  itemWidth,
  itemHeight,
  renderItem,
  onRefresh,
  isAllLoaded,
  onLoadMore,
}) {
  return (
    <View>
      <WaterfallList
        ref={ref => (this.largeList = ref)}
        style={AppStyle.styleGuide.container}
        data={data}
        heightForItem={() => itemHeight}
        preferColumnWidth={itemWidth}
        numColumns={2}
        renderItem={renderItem}
        refreshHeader={NormalHeader}
        onRefresh={onRefresh}
        loadingFooter={NormalFooter}
        allLoaded={isAllLoaded}
        onLoading={onLoadMore}
      />
    </View>
  );
}

WaterFallList.propTypes = {};

export default WaterFallList;
