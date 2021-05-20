import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// ROUTES

import FirstScreen from './src/Routes/FirstScreen/index';
import SignUp from './src/Routes/SignUp/index';
import Gender from './src/Routes/SignUp/Gender/index';
import Location from './src/Routes/SignUp/Location/index';
import Diet from './src/Routes/SignUp/Diet/index';
import Intrests from './src/Routes/SignUp/Intrests/index';
import SocialLogin from './src/Routes/SignUp/SocialLogin/index';

// NAVIGATIONS

const Stack = createStackNavigator();

export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
<Stack.Screen
          name="Gender"
          component={Gender}
          options={{ headerShown: false }}
        />
<Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        />
<Stack.Screen
          name="Diet"
          component={Diet}
          options={{ headerShown: false }}
        />
<Stack.Screen
          name="Intrests"
          component={Intrests}
          options={{ headerShown: false }}
        />
<Stack.Screen
          name="SocialLogin"
          component={SocialLogin}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
