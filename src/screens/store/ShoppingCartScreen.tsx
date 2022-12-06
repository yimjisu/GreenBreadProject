import PublicText from '../../components/common/PublicText';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import firestore from '@react-native-firebase/firestore';
import OrangeButton from '../../components/buttons/LightBlueButton';
import NumericInput from './components/NumericInput';

const DEFAULT_IMAGE = require('../../assets/product-images/단팥빵.png');
const ShoppingCartScreen = ({navigation, route}) => {
  const storeId = route.params.storeId;
  const productId = route.params.productId;
  const [productData, setProductData] = useState({});
  const [number, setNumber] = useState(1);

  useEffect(() => {
    async function init() {
      try {
        firestore()
          .collection('store')
          .doc(storeId)
          .collection('product')
          .doc(productId)
          .onSnapshot(snapshot => {
            setProductData(snapshot.data());
          });
      } catch (error) {
        console.error(error);
      }
    }
    init();
  }, []);

  const onPressBasket = useCallback(
    (storeId: number, productId: number) => async () => {
      navigation.goBack();
    }, [navigation]
  );

  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Image
        source={productData.image ? {url: image} : DEFAULT_IMAGE}
        style={styles.backgroundImage}>
      </Image>      
      <View style={styles.titleContainer}>
          <PublicText style={styles.title}>{productData.title}</PublicText>
          <PublicText style={styles.infoText}>잔여수량    {productData.amount}개</PublicText>
          <PublicText style={styles.infoText}>판매가격    {productData.origin_price}원</PublicText>
          <PublicText style={styles.infoText}>할인가격    {productData.dc_price}원</PublicText>
      </View>
    </View>
    
    <View style={styles.cartContainer}>
      <NumericInput style={styles.numericInput} number={number} onIncrease={onIncrease} onDecrease={onDecrease}></NumericInput>
      <View style={styles.textContainer}>
        <PublicText style={styles.textAmt}>총액 : {productData.dc_price * number} 원</PublicText>
      </View>
      <OrangeButton style={styles.button} title="장바구니 담기" onPress={onPressBasket}/>
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  infoContainer: {
    paddingHorizontal: 20,
    flex: 3,
    padding: 10,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 216, 157, 0.5)',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    widht: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: 300,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 10,
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  infoText:{
    fontSize: 20,
    color: 'black',

  },
  text:{
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent:'center',
    flex: 1,
  },
  textAmt:{
    fontSize: 16,
    color: 'black',
  },
  numericInput : {
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    flex: 1,
  }
});
export default ShoppingCartScreen;
