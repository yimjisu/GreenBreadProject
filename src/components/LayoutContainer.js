import React from 'react';
import {View, StyleSheet} from 'react-native';

const LayoutContainer = props => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    margin: 20,
  },
});

export default LayoutContainer;
