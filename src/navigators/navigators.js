import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register } from '../screens/auth';
import { HomeScreen } from '../screens/app/HomeScreen';

const Stack = createNativeStackNavigator();
const AuthStack = function () {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
  );
}




const AppStack = function () {
  return (
    <Stack.Navigator>
      </Stack.Navigator>
  );
}
export { AuthStack, AppStack };
