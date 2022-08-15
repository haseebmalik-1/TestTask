/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Dimensions, StatusBar, SafeAreaView} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import Hooks from './src/components/CustomHooks/Hooks';
import MobX from './src/components/CustomHooks/MobX';
import {colors} from './src/utils/CommonUtils';

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = ({route, jumpTo}) => {
  switch (route.key) {
    case 'Hooks':
      return <Hooks jumpTo={jumpTo} />;
    case 'MobX':
      return <MobX jumpTo={jumpTo} />;
  }
};

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
    />
  );
};

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Hooks', title: 'Hooks'},
    {key: 'MobX', title: 'MobX'},
  ]);

  return (
    <SafeAreaView style={{height : '100%', backgroundColor : colors.secondary}}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
        swipeEnabled={false}
        tabBarPosition="bottom"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'red',
  },
  tabBar: {
    backgroundColor: colors.primary,
  },
  indicator: {
    backgroundColor: colors.main,
  },
});
