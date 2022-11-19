import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function FlexScreen(props) {
  return (
    <ScreenContainer>
      <LayoutContainer>
        <View style={styles.powederblue} />
        <View style={styles.skyblue} />
        <View style={styles.steelblue} />
      </LayoutContainer>
      <LayoutContainer>
        <View style={styles.powederblue} />
        <View style={[styles.skyblue, {flex: 2}]} />
        <View style={styles.steelblue} />
      </LayoutContainer>
      <LayoutContainer>
        <View style={[styles.powederblue, {flex: 0, height: 10}]} />
        <View style={[styles.skyblue, {flex: 2}]} />
        <View style={styles.steelblue} />
      </LayoutContainer>
      <LayoutContainer style={{flexDirection: 'row'}}>
        <View style={styles.powederblue} />
        <View style={styles.skyblue} />
        <View style={styles.steelblue} />
      </LayoutContainer>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  powederblue: {
    width: 50,
    backgroundColor: 'powderblue',
    flex: 1,
  },
  skyblue: {
    width: 50,
    backgroundColor: 'skyblue',
    flex: 1,
  },
  steelblue: {
    width: 50,
    backgroundColor: 'steelblue',
    flex: 1,
  },
});
