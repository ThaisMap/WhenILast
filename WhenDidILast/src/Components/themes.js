import React from 'react';
import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const lightTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#81C784',
      accent: '#6BE186',
    },
  };


export const darkTheme = {
    ...DarkTheme,
    roundness: 2,
    colors: {
      ...DarkTheme.colors,
      primary: '#81C784',
      accent: '#6BE186',
    },
  };