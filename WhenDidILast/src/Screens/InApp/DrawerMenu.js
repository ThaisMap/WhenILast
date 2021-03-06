import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import Dashboard from './Dashboard';
import NewCategory from './NewCategory';
import DrawerContent from './DrawerContent'; 
import SingleCategory from "./SingleCategory";
import NewActivity from './NewActivity';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator  
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="NewCategory">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="NewCategory" component={NewCategory} /> 
        <Drawer.Screen name="SingleCategory" component={SingleCategory} /> 
        <Drawer.Screen name="NewActivity" component={NewActivity} /> 
      </Drawer.Navigator>
  );
}