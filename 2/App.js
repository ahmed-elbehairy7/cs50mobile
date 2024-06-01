import { StatusBar } from 'expo-status-bar';
import {View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen'
import DetailsScreen from './screens/DetailsScreen'

const API_KEY = "a54f6854"
const SAMPLE_REQUEST = "https://omdbapi.com/?apikey=a54f6854&s="

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="search for movie" component={SearchScreen}/>
        <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
