import React from 'react';
import { GestureResponderEvent, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import PublicText from '../../../components/common/PublicText';

type Props = {
  title: string;
  distance: number;
  location: string;
  openTime?: string;
  closeTime?: string;
  current: boolean,
  image?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const DEFAULT_IMAGE = require('../../../assets/images/store-default-image.png');
const StoreListItem: React.FC<Props> = ({title, distance, location, leftOver, sale, current, openTime, closeTime, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.titleContainer}>
          <PublicText style={styles.title}>{title}</PublicText>
          <PublicText style={styles.location}>{distance}km|{location}</PublicText>
      </View>
      <Image
        source={image ? {uri: image} : DEFAULT_IMAGE}
        style={styles.backgroundImage}>
      </Image>
      {
        current ? (
          <View>
            <PublicText style={styles.leftOver}>잔여수량:{leftOver}개</PublicText>
            <PublicText style={styles.sale}>{sale}%</PublicText>
          </View>
        ) : (
          <View>
            <PublicText style={styles.openTime}>{openTime}시 시작</PublicText>
            <PublicText style={styles.sale}>{sale}%</PublicText>
          </View>
        )
      }
      
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
    color: 'gray'
  },
  leftOver: {
    fontSize: 16,
    color: 'black'
  },
  openTime: {
    fontSize: 16,
    color: 'black'
  },
  sale: {
    fontSize: 16,
    color: 'orange'
  }
});
export default StoreListItem;
