import React from 'react';
import { Image, StyleSheet } from 'react-native';

const LOGO_IMAGE = require('../../assets/images/logo.png');

const Logo = () => {
  return <Image style={styles.logo} source={LOGO_IMAGE} resizeMode="contain" />;
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 300,
  },
});

export default Logo;
