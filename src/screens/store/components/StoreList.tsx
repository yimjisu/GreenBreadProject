import React from 'react';
import {useState} from 'react';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import PublicText from '../../../components/common/PublicText';
import firestore from '@react-native-firebase/firestore';
import StoreListItem from './StoreListItem';

const StoreList = ({navigation, title, state}) => {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    async function init() {
      try {
        firestore()
        .collection('store')
        .where("openState", "==", state).onSnapshot(
          (querySnapshot) => {
          var stores = [];
          querySnapshot.forEach((doc) => {
            stores.push(doc.id);
          })
          console.log('stores', stores);
          setStoreList(stores);
        });
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
  }, [navigation]);

  return (
    <View style={styles.container}>
      <PublicText style={styles.title}>{title}</PublicText>
      <ScrollView horizontal>
        {storeList.map(item => {
          return (
            <StoreListItem
              key={item}
              id={item}
              onPress={onPressStore(item)}
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
    flex: 1,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  title: {
    color: 'orange',
    marginLeft: 20,
    marginBottom: 10,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
});

export default StoreList;
