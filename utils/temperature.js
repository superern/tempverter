const UNIT = {
    celsius: "°C",
    fahrenheit: "°F"
}

function convertTemperatureTo(temperature, unitTo) {
    let convertedTemp = 0;
    switch (unitTo) {
        case UNIT.celsius:
            convertedTemp = (temperature - 32) / 1.8
            break;
        case UNIT.fahrenheit:
            convertedTemp = temperature * 1.8 + 32
            break;
        default:
            console.error('not a valid unit')
            break
    }

    return convertedTemp.toFixed(1);
}

function getOppositeUnit(currentUnit) {
    return currentUnit === UNIT.celsius ? UNIT.fahrenheit : UNIT.celsius
}

export {UNIT, convertTemperatureTo, getOppositeUnit};
