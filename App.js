import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import hotBackground from './assets/hot.png'
import coldBackground from './assets/cold.png'
import {styles} from './App.style';
import {Input} from "./components/Input/Input";
import {Temperature} from "./components/Temperature/Temperature";
import {useEffect, useState} from "react";
import {Button} from "./components/Button/Button";
import {convertTemperatureTo, getOppositeUnit, UNIT} from "./utils/temperature"

export default function App() {
    const [temperature, setTemperature] = useState(0)
    const [currentUnit, setCurrentUnit] = useState(UNIT.celsius)
    const [background, setBackground] = useState(hotBackground)

    useEffect(() => {
        setBackground(temperature > 20 && currentUnit === UNIT.celsius ? hotBackground : coldBackground)
    }, [temperature])

    function onInputChange(temp) {
        setTemperature(temp)
    }

    function getConvertedTemp() {
        return convertTemperatureTo(temperature, getOppositeUnit(currentUnit))
    }

    function onToggle() {
        setTemperature(Number(getConvertedTemp()))
        setCurrentUnit(getOppositeUnit(currentUnit))
    }

    function onReset() {
        setTemperature(0);
    }

    return (
        <ImageBackground style={styles.background} source={background}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.main}>
                    <View style={styles.container}>
                        <Temperature _temperature={getConvertedTemp()} _unit={getOppositeUnit(currentUnit)}/>
                        <Input _value={temperature} _onInputChange={onInputChange} _unit={currentUnit}/>
                        <View style={styles.buttonGroup}>
                            <Button _onToggle={onToggle}/>
                            <TouchableOpacity onPress={onReset} style={styles.resetButton}>
                                <Text style={styles.resetButtonLabel}>Reset</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}
