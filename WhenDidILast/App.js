import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
 
import Login from './src/Screens/Login/Email';
import Signup from './src/Screens/Login/SignUp';
import Password from './src/Screens/Login/ForgotPass';
import SplashScreen from './src/Screens/Login/SplashScreen';
import Menu from './src/Screens/InApp/DrawerMenu';
import LoginOptions from './src/Screens/Login/LandingPage';

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
      <Stack.Navigator headerMode={false}>
        {user == null ? (
          <>
            <Stack.Screen name="LoginOptions" options={{ title: 'Opções de login' }} component={LoginOptions} />
            <Stack.Screen name="EmailLogin" options={{ title: 'Login com e-mail' }} component={Login} />
            <Stack.Screen name="SignUp" options={{ title: 'Cadastrar E-mail' }} component={Signup} />
            <Stack.Screen name="Password" options={{ title: 'Esqueceu a senha' }} component={Password} />
          </>
        ) : (
          <>
            <Stack.Screen name="When did I Last?" component={Menu} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;