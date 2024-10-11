import React from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import Home from '../screeens/Home/Home';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'Profile'} component={Home} />
        </Stack.Navigator>
    )
};

export default MainNavigation;