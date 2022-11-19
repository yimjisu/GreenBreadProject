import React from 'react';
import {View, StyleSheet} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function FloatingScreen(props) {
  return (
    <ScreenContainer>
      <LayoutContainer>
        <View style={[styles.powderblue, {position: 'absolute'}]} />
        <View style={styles.skyblue} />
        <View style={styles.steelblue} />
      </LayoutContainer>
      <LayoutContainer>
        <View style={[styles.powderblue, {position: 'relative'}]} />
        <View style={styles.skyblue} />
        <View style={styles.steelblue} />
      </LayoutContainer>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  powderblue: {
    zIndex: 1,
    left: 20,
    top: 20,
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
  },
  skyblue: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
  },
  steelblue: {
    width: 50,
    height: 50,
    backgroundColor: 'steelblue',
  },
});
