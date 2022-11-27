import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/Signup';
import Login from './src/Login';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import BucketInfoScreen from './src/screens/BucketInfoScreen';
import ReportScreen from './src/screens/ReportScreen';

import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="BucketInfo" component={BucketInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;