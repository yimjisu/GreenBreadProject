
import PublicText from '../../components/common/PublicText';
import { FlatList, StyleSheet, View } from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {getDocsId} from '../../../lib/firestore';
import ProductItem from './components/ProductItem';

const MenuScreen = ({navigation, route}) => {
  const id = route.params.storeId;
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    async function init() {
      try {
        // [TODO] Backend
        const temp = await getDocsId('store/'+id+'/product');
        console.log('temp', temp);
        setProductList(temp);
      } catch (error) {
        console.error(error);
      }
    }
    init();
  }, []);

  const onPressProduct = useCallback((storeId: number, productId:number) => async () => {
    // navigation.navigate('StoreHome', {
    //   storeId,
    // });
  });

  return (
    <>
      <FlatList
        data={productList}
        renderItem={(productId) => {
          return (
            <ProductItem
              storeId={id}
              productId={productId.item}
              onPress={onPressProduct(id, productId.item)}
            />
          );
        }}
      />
    </>
  );
};


const listItemStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
  }, text: {
    color: 'black',
  },
});

export default MenuScreen;
