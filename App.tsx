import { NavigationContainer } from '@react-navigation/native';

import Login from './app/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} options={{headerShown :false}} />
          
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

