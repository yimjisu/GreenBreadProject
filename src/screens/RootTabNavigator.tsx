import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './tab/HomeScreen';
import SettingScreen from './tab/SettingScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import OrderScreen from './tab/OrderScreen';
import SearchScreen from './tab/SearchScreen';

const RootTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === '검색') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === '주문 내역') {
            iconName = focused ? 'md-basket' : 'md-basket-outline';
          } else if (route.name === '내 정보') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="검색" component={SearchScreen} />
      <Tab.Screen name="주문 내역" component={OrderScreen} />
      <Tab.Screen name="내 정보" component={SettingScreen} />
    </Tab.Navigator>
  );
};
export default RootTabNavigator;
