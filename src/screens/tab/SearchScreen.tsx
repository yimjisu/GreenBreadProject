import { View } from "react-native";
import PublicText from "../../components/common/PublicText";
import ScreenContainer from "../../components/layout/ScreenContainer";

const SearchScreen = () => {
    return (
        <ScreenContainer>
            <View>
                <PublicText>search</PublicText>
            </View>
        </ScreenContainer>
    );
};

export default SearchScreen;