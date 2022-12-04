import React from 'react';
import {useState} from 'react';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import PublicText from '../../../components/common/PublicText';

import StoreListItem from './StoreListItem';

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
    openTime: 9,
    closeTime: 9,
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

const StoreList = ({navigation, title, current}) => {
  const [storeList, setStoreList] = useState<Data[]>([]);

  useEffect(() => {
    async function init() {
      try {
        // [TODO] Backend
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
      <View style={styles.container}>
      <PublicText style={styles.title}>{title}</PublicText>
        <ScrollView horizontal>
        {storeList.map((row, index) => {
          return (
            <StoreListItem
              key={index}
              title={row.title}
              distance={row.distance}
              location={row.location}
              openTime={row.openTime}
              closeTime={row.closeTime}
              leftOver={row.leftOver}
              sale={row.dcRate}
              current={current}
              image={row.type && row.image ? `${row.type}${row.image}` : null}
              onPress={onPressStore(row.id)}
            />
          );
        })}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  scrollContainer: {
    flex:1,
    alignItems: "flex-start",
    flexWrap: 'wrap'
  },
  title: {
    color: 'orange',
    marginLeft: 20,
    marginBottom: 10,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  }
});

export default StoreList;
