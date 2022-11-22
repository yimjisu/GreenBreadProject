import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PublicText from '../../components/common/PublicText';
import ScreenContainer from '../../components/layout/ScreenContainer';
import { RootStackParamList } from '../RootStackNavigator';
import FloatingActionButtton from './components/FloatingActionButton';



const Tab = createMaterialTopTabNavigator();

type Props = NativeStackScreenProps<RootStackParamList, 'StoreHome'>;
const StoreHomeScreen: React.FC<Props> = ({navigation, route}) => {
  const {storeId} = route.params;

  useEffect(() => {
    // todo: 네트워킹
  }, []);
  return (
    <ScreenContainer>
      <Tab.Navigator>
        <Tab.Screen name="메뉴" component={MenuScreen} />
        <Tab.Screen name="빵집 정보" component={StoreInfoScreen} />
        <Tab.Screen name="후기" component={ReviewScreen} />
      </Tab.Navigator>
    </ScreenContainer>
  );
};

const listItemStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
  },
});

export default StoreHomeScreen;
