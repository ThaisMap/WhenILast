import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import Dashboard from './src/pages/dashboard';
import Login from './src/pages/login';
import LoginOptions from './src/pages/loginOptions';
import SplashScreen from './src/pages/splash';

const Stack = createStackNavigator();

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; //Para de ouvir quando sai da arrow function
  }, []);

  //Quando mudar o auth state
  function onAuthStateChanged(user) {
    setUser(user);
    setLoading(false);
  }

  if (loading)
    return <SplashScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user == null ? (
          <>
            <Stack.Screen name="LoginOptions" options={{ title: 'Opções de login' }} component={LoginOptions} />
            <Stack.Screen name="EmailLogin" options={{ title: 'Login com e-mail' }} component={Login} />
          </>
        ) : (
            <Stack.Screen name="DashBoard" component={Dashboard} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;