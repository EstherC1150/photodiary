/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import {} from 'react-native/Libraries/NewAppScreen';

// 현재 보고 있는 화면의 높이와 폭 가져오기
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'http://192.168.35.225:3000/ksg'}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});

export default App;
