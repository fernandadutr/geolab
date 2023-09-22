import { View } from "react-native";
import { CheckBox } from "react-native-elements";

const Passo1: React.FC = () => {
    return (
        <View>
            <CheckBox>
                Balança que permita pesar nominalmente 200 g,
                1,5kg e 5kg, com resoluções de 0,01g, 0,1g e
                0,5g, respectivamente;
            </CheckBox>
        </View>
    );
}