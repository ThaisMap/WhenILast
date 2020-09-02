import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import Dashboard from './Dashboard';
import NewCategory from './NewCategory';
import DrawerContent from './DrawerContent';




const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator 
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="NewCategory" component={NewCategory} />
      </Drawer.Navigator>
  );
}