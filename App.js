import {Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
export default function App() {
  return <SafeAreaProvider>
    <SafeAreaView>
      <Text style={{fontSize:30}}>Hello</Text>
    </SafeAreaView>
  </SafeAreaProvider>
}
