import React from 'react';
import { GestureResponderEvent, Image,ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';

import PublicText from '../../../components/common/PublicText';

type Props = {
  title: string;
  distance: number;
  location: string;
  image?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const DEFAULT_IMAGE = require('../../../assets/images/store-default-image.png');
const StoreListItem: React.FC<Props> = ({title, distance, location, leftOver, sale, image, onPress}) => {
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
      <View style={styles.infoContainer}>
          <PublicText style={styles.leftOver}>잔여수량:{leftOver}개</PublicText>
          <PublicText style={styles.sale}>{sale}%</PublicText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0, 0.4)',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  backgroundImage: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: '#fff',
  },
});
export default StoreListItem;
