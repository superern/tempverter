import {Text} from "react-native";

export function Temperature({_temperature, _unit}) {
    return (
        <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
            {_temperature || 0}{_unit}
        </Text>
    );
}
