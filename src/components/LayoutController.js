import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

// const {
//     flexDirection,
//     justifyContent,
//     alignItems,
//     setFlexDirection,
//     setJustifyContent,
//     setAlignItems,
// } = props;

const Row = ({children}) => {
  return <View style={styles.rowContainer}>{children}</View>;
};

const Btn = ({title, value, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('onPress', title);
        onPress(title);
      }}
      style={[styles.btn, value === title && styles.selectedBtn]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
const LayoutController = ({
  flexDirection,
  justifyContent,
  alignItems,
  setFlexDirection,
  setJustifyContent,
  setAlignItems,
}) => {
  return (
    <View style={styles.container}>
      <Row>
        <Text>FlexDirection:</Text>
        <Btn
          title={'column'}
          onPress={setFlexDirection}
          value={flexDirection}
        />
        <Btn title={'row'} onPress={setFlexDirection} value={flexDirection} />
      </Row>
      <Row>
        <Text>justifyContent</Text>
        <Btn
          title={'flex-start'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
        <Btn
          title={'center'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
        <Btn
          title={'flex-end'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
        <Btn
          title={'space-between'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
        <Btn
          title={'space-around'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
        <Btn
          title={'space-evenly'}
          onPress={setJustifyContent}
          value={justifyContent}
        />
      </Row>
      <Row>
        <Text>alignItems</Text>
        <Btn title={'flex-start'} onPress={setAlignItems} value={alignItems} />
        <Btn title={'center'} onPress={setAlignItems} value={alignItems} />
        <Btn title={'flex-end'} onPress={setAlignItems} value={alignItems} />
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    margin: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  selectedBtn: {
    backgroundColor: '#ccc',
  },
});
export default LayoutController;
