import React from 'react';
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Home} />
        </Stack.Navigator>
    )
};

export default MainNavigation;