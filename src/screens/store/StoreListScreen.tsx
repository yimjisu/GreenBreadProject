import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useState} from 'react';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import PublicText from '../../components/common/PublicText';

import ScreenContainer from '../../components/layout/ScreenContainer';
import {RootStackParamList} from '../RootStackNavigator';
import StoreListItem from './components/StoreListItem';

type Data = {
  id: number;
  title: string;
  summary: string;
  status?: string;
  createdAt: Date;
  image: string;
  imageStr?: string;
  type: string;
};

const data = [
  {
    title: 'Bread1',
    id: 1,
    distance: 2.2,
    location: '월평동',
    leftOver: 10,
    dcRate : 30,
  },{
    title: 'Bread2',
    id: 2,
    distance: 1.4,
    location: '월평동',
    leftOver: 10,
    dcRate : 30,
  },{
    title: 'Bread3',
    id: 3,
    distance: 1.8,
    location: '월평동',
    leftOver: 10,
    dcRate : 30,
  },
];

type Props = NativeStackScreenProps<RootStackParamList, 'StoreList'>;
const StoreListScreen: React.FC<Props> = ({navigation}) => {
  const [storeList, setStoreList] = useState<Data[]>([]);

  useEffect(() => {
    async function init() {
      try {
        setStoreList(data);
      } catch (error) {
        console.error(error);
      }
    }

    init();
  }, []);

  const onPressStore = useCallback((storeId: number) => async () => {
    navigation.navigate('StoreHome', {
      storeId,
    });
  });

  return (
    <ScreenContainer>
      <View style={styles.titleContainer}>
          <PublicText>NOW</PublicText>
      </View>
      <ScrollView horizontal>
        {storeList.map((row, index) => {
          return (
            <StoreListItem
              key={index}
              title={row.title}
              distance={row.distance}
              location={row.location}
              leftOver={row.leftOver}
              sale={row.dcRate}
              image={row.type && row.image ? `${row.type}${row.image}` : null}
              onPress={onPressStore(row.id)}
            />
          );
        })}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});

export default StoreListScreen;
