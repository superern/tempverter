import {Text, TextInput, View} from "react-native";
import {styles} from "./Input.style";

export function Input({_value, _onInputChange, _unit}) {
    return (
        <View style={{alignSelf: 'stretch', justifyContent: 'center'}}>
            <TextInput
                value={_value.toString()}
                placeholder={"Place your temperature"}
                onChangeText={(text) => _onInputChange(text)}
                style={styles.textInput}/>
            <Text style={styles.text}>{_unit}</Text>
        </View>
    );
}
