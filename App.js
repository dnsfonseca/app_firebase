import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./src/pages/homepage";
import Register from "./src/pages/register";
import Login from "./src/pages/login";
import Subjects from "./src/pages/subjects";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Homepage"
          component={Homepage}
        />
        <Stack.Screen
          options={{
            title: "Cadastro de Usuários",
            headerTitleAlign: "center",
            headerStyle: { height: 80 },
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{
            title: "Login",
            headerTitleAlign: "center",
            headerStyle: { height: 80 },
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            title: "Cadastro de Jogos",
            headerTitleAlign: "center",
            headerStyle: { height: 80 },
          }}
          name="Subjects"
          component={Subjects}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
