import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import SkillsScreen from './src/screens/SkillsScreen';

// npm install @react-navigation/native @react-navigation/native-stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{title: "Welcome"}}/>
        <Stack.Screen name="Skills" component={SkillsScreen} options={{title: "Welcome"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
