import React, {useEffect, useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import PublicText from '../../../components/common/PublicText';
import firestore from '@react-native-firebase/firestore';

type Props = {
  title: string;
  distance: number;
  location: string;
  openTime?: string;
  closeTime?: string;
  current: boolean;
  image?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const DEFAULT_IMAGE = require('../../../assets/images/store-default-image.png');
const StoreListItem: React.FC<Props> = ({id, onPress}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function init() {
      try {
        firestore()
          .collection('store')
          .doc(id)
          .get()
          .then(doc => {
            if (doc.exists) {
              setData(doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log('No such Product!');
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
    init();
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.titleContainer}>
        <PublicText style={styles.title}>{data.title}</PublicText>
        <PublicText style={styles.location}>11km | {data.addr}</PublicText>
      </View>
      <Image
        source={data.image ? {uri: image} : DEFAULT_IMAGE}
        style={styles.backgroundImage}></Image>
    </TouchableOpacity>
  );
};

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
  },
  location: {
    fontSize: 12,
    color: 'gray',
  },
  leftOver: {
    fontSize: 16,
    color: 'black',
  },
  openTime: {
    fontSize: 16,
    color: 'black',
  },
  sale: {
    fontSize: 16,
    color: 'orange',
  },
});
export default StoreListItem;
