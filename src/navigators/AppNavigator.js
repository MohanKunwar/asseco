import { NavigationConta } from '@react-navigation/native';
import { AuthStack, AppStack } from './navigators';
import LoadingScreen from './../screens/LoadingScreen';

const AppNavigator =
  createSwitchNavigator(
    {
      AuthLoading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );
export default AppNavigator;