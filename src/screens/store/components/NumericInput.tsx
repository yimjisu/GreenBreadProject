import React, { useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PublicText from '../../../components/common/PublicText';

const NumericInput: React.FC<Props> = ({number, onIncrease, onDecrease, style}) => {

  return (
    <View style={[styles.container, style]}>
       <TouchableOpacity style={styles.input} onPress={onDecrease}>
        <PublicText style={styles.inputText}>-</PublicText>
       </TouchableOpacity>
      <View style={styles.textContainer}>
        <PublicText style={styles.numberText}>{number}개</PublicText>
      </View>
      <TouchableOpacity style={styles.input} onPress={onIncrease}>
        <PublicText style={styles.inputText}>+</PublicText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 30,
    color: '#D9D9D9',
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF6B2C',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 20,
    color: '#FF6B2C',
  }
});

export default NumericInput;
