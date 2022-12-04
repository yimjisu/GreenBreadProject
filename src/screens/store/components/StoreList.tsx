import React from 'react';
import {useState} from 'react';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import PublicText from '../../../components/common/PublicText';

import StoreListItem from './StoreListItem';
import {getDocsId} from '../../../../lib/firestore';


const StoreList = ({navigation, title, state}) => {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    async function init() {
      try {
        // [TODO] Backend
        const data = await getDocsId('store');
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
        {storeList.map((id) => {
          return (
            <StoreListItem
              key={id}
              id={id}
              onPress={onPressStore(id)}
              state={state}
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
