import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ArticleWriteScreen from '../store/ArticleWriteScreen';
import StoreHomeScreen from '../store/StoreHomeScreen';
import StoreListScreen from '../store/StoreListScreen';
import CreateProfileScreen from '../store/CreateProfileScreen';
import { RootStackParamList } from '../RootStackNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="StoreList" component={StoreListScreen} />
        <Stack.Screen name="ArticleWrite" component={ArticleWriteScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
        <Stack.Screen name="StoreHome" component={StoreHomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;