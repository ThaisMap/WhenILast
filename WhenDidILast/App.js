import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Dashboard from './src/pages/dashboard';
import Login from './src/pages/login';

export default function App() {
  //Carregando enquando conecta com o Firebase
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //Quando mudar o auth state
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; //Para de ouvir quando sai da arrow function
  }, []);

  if (initializing) return null;

  if (!user) {
    return <Login />;
  }

  function Logout() {}

  return <Dashboard />;
}
