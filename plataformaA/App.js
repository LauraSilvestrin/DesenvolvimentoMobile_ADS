import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import login from "./screens/login";
import perfil from "./screens/perfil";
import disciplinas from "./screens/disciplinas";
import notasFaltasUnificadas from "./screens/notasFaltasUnificadas";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="perfil"
          component={perfil}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="disciplinas"
          component={disciplinas}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="notasFaltasUnificadas"
          component={notasFaltasUnificadas}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
