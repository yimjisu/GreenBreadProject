import React from "react";
import StoreList from "./components/StoreList";
import { View,ScrollView, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackNavigator";
import PublicText from "../../components/common/PublicText";

type Props = NativeStackScreenProps<RootStackParamList, 'StoreList'>;
const HomeScreen: React.FC<Props> = ({navigation}) => {
    return (
    <ScrollView>
        <PublicText style={styles.title}>오늘의 빵</PublicText>
        <StoreList navigation={navigation} title='NOW' current/>
        <StoreList navigation={navigation} title='Coming Soon'/>
        {/* <ReviewListScreen /> */}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    title : {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        padding: 10,
    }
});

export default HomeScreen;