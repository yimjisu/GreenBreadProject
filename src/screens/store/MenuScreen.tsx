import {FlatList} from 'react-native-gesture-handler';

const MenuScreen = ({navigation, route}) => {
  const {storeId} = route.params;
  const data = [{
        title: '단팥빵',
    },{
        title: '단팥빵',
    }
  ]
  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={listItemStyles.container}>
              <PublicText>{item.title}</PublicText>
            </View>
          );
        }}
      />
      <FloatingActionButtton storeId={storeId} />
    </>
  );
};

export default MenuScreen;
