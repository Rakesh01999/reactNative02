// import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
// import Profile from '../screens/Profile/Profile'; // Fixed typo here
import Home from '../screens/Home/Home'; // Fixed typo here
import Profile from '../screeens/Profile/Profile';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
