import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {useOptions} from './components/NavigationOptions';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

export default function Route() {
    const user = useSelector(state => state.user);
    const options = useOptions();

    return (
        <NavigationContainer>
            <Stack.Navigator>
            {user.isUserLoggedIn == false ? (
                <> 
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={({navigation}) => options}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={({navigation}) => options}
                />
                </>
            ) : (
                <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
                />
            )}
            </Stack.Navigator>
        </NavigationContainer>
      );
}