import React from 'react';
import {View, StyleSheet} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';

export default function AlignSelfScreen(props) {
  return (
    <ScreenContainer>
      <LayoutContainer
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={[styles.powederblue, {height: 50, alignSelf: 'flex-start'}]}
        />
        <View style={[styles.skyblue, {height: 50}]} />
        <View style={[styles.steelblue, {height: 50, alignSelf: 'flex-end'}]} />
      </LayoutContainer>

      <LayoutContainer
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={[styles.powederblue, {width: 50, alignSelf: 'flex-start'}]}
        />
        <View style={[styles.skyblue, {width: '100%'}]} />
        <View style={[styles.steelblue, {width: 50, alignSelf: 'flex-end'}]} />
      </LayoutContainer>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  powederblue: {
    backgroundColor: 'powderblue',
    flex: 1,
  },
  skyblue: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
  steelblue: {
    backgroundColor: 'steelblue',
    flex: 1,
  },
});
