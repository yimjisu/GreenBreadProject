import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ArticleWriteScreen from '../store/ArticleWriteScreen';
import StoreHomeScreen from '../store/StoreHomeScreen';
import StoreListScreen from '../store/StoreListScreen';
import CreateProfileScreen from '../store/CreateProfileScreen';
import ShoppingCartScreen from '../store/ShoppingCartScreen';
import OrderCompleteScreen from '../store/OrderCompleteScreen';
import {RootStackParamList} from '../RootStackNavigator';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TotalShoppingCartScreen from '../store/TotalShoppingCartScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen = () => {
  return (
    <Stack.Navigator  screenOptions={{
      contentStyle:{
        backgroundColor:'#F8F8F8'
      }
    }}
    >
      <Stack.Screen
        name="StoreList"
        options={styles.headerStyle}
        component={StoreListScreen}
      />
      <Stack.Screen name="OrderCompleteScreen" component={OrderCompleteScreen} />
      <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} />
      <Stack.Screen name="TotalShoppingCartScreen" component={TotalShoppingCartScreen} />
      <Stack.Screen name="ArticleWrite" component={ArticleWriteScreen} />
      <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
      <Stack.Screen name="StoreHome" component={StoreHomeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    title: '유성구 대학로 291',
    headerStyle: {
      backgroundColor: '#FF9E58',
    },
    headerTintColor: '#fff',
    headerLeft: props => (
      <Icon name="map" size={20} style={{marginRight: 10}} />
    ),
  },
});

export default HomeScreen;
