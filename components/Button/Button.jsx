import {Text, TouchableOpacity} from "react-native";
import {styles} from "./Button.style";

export function Button({_onToggle}) {
    return <TouchableOpacity onPress={_onToggle} style={styles.button}>
        <Text style={styles.text}>Toggle</Text>
    </TouchableOpacity>
}
