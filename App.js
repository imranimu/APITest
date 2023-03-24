import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './src/reducers/allReducer';

const store = createStore(allReducers);

const App = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const DarkTheme = {
        ...DefaultTheme,
        roundness: 2,
        dark: true,
        colors: {
          ...DefaultTheme.colors,
          primary: '#1976D3',
          bgcolor: '#20232a',          
          lightGrey: '#353B45', 
          textcolor: '#fff', 
        },
      };
      const LightTheme = {
        ...DefaultTheme,
        roundness: 2,
        dark: false,
        colors: {
          ...DefaultTheme.colors,
          primary: '#1976D3',
          bgcolor: '#f6fafe',
          lightGrey: '#F6FAFE',          
          textcolor: '#000',
        },
      };

    return (
        <PaperProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <StatusBar
                backgroundColor={isDarkMode ? '#20232a' : '#fff'}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <Provider store={store}>
                <Route />
            </Provider>
        </PaperProvider>
    )
}

export default App

const styles = StyleSheet.create({

})