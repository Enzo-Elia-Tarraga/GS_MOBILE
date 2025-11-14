import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterWorkScreen from "../screens/RegisterWorkScreen";
import HistoryScreen from "../screens/HistoryScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Registrar" component={RegisterWorkScreen} />
      <Stack.Screen name="Histórico" component={HistoryScreen} />
      <Stack.Screen name="Perfil" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
