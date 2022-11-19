import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useState} from 'react';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {ScrollView} from 'react-native';

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

type Props = NativeStackScreenProps<RootStackParamList, 'StoreList'>;
const StoreListScreen: React.FC<Props> = ({navigation}) => {
  const [storeList, setStoreList] = useState<Data[]>([]);

  useEffect(() => {
    async function init() {
      try {
        setStoreList([
          {
            title: 'Bread1',
            id: 1,
          },{
            title: 'Bread2',
            id: 2,
          },{
            title: 'Bread3',
            id: 3,
          },
        ]);
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
      <ScrollView>
        {storeList.map((row, index) => {
          return (
            <StoreListItem
              key={index}
              title={row.title}
              image={row.type && row.image ? `${row.type}${row.image}` : null}
              onPress={onPressStore(row.id)}
            />
          );
        })}
      </ScrollView>
    </ScreenContainer>
  );
};

export default StoreListScreen;
