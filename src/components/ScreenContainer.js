import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

const ScreenContainer = props => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
  },
});
export default ScreenContainer;
