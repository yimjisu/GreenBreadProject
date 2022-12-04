import React, {useEffect, useState} from 'react';
import { GestureResponderEvent, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import PublicText from '../../../components/common/PublicText';
import {getData} from '../../../../lib/firestore';

const DEFAULT_IMAGE = require('../../../assets/images/store-default-image.png');
const ProductItem = ({storeId, productId, onPress}) => {

  const [data, setData] = useState({});
  
  useEffect(() => {
    async function init() {
      try {
        // [TODO] Backend
        const temp = await getData('store/'+storeId+'/product/'+productId);
        console.log(temp);
        setData(temp);
      } catch (error) {
        console.error(error);
      }
    }
    init();
  }, []);

  return (
  // <TouchableOpacity style={styles.container} onPress={onPress}>
  //       <View style={styles.titleContainer}>
  //           <PublicText style={styles.title}>{data.title}</PublicText>
  //       </View>
  //       <Image
  //         source={data.image ? {uri: image} : DEFAULT_IMAGE}
  //         style={styles.backgroundImage}>
  //       </Image>      
  //     </TouchableOpacity>
  null
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: 250,
    borderRightColor: '#D9D9D9',
    borderRightWidth: 1,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
  },
  backgroundImage: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: 'black',
  }
});
export default ProductItem;
