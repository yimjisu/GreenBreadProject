import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import LayoutContainer from '../components/LayoutContainer';
import LayoutController from '../components/LayoutController';

export default function DynamicScreen(props) {
  const [flexDirection, setFlexDirection] = useState('column');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');

  return (
    <ScreenContainer>
      <LayoutContainer
        style={{
          flexDirection,
          justifyContent,
          alignItems,
        }}>
        <View style={styles.powederblue} />
        <View style={styles.skyblue} />
        <View style={styles.steelblue} />
      </LayoutContainer>
      <LayoutController
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        setFlexDirection={setFlexDirection}
        setJustifyContent={setJustifyContent}
        setAlignItems={setAlignItems}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  powederblue: {
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
