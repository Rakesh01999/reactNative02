import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import Home from '../screeens/Home/Home';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const Stack = createStackNavigator();

const Profile = () => {
    return (
        <View>
            <Text>
                This is profile
            </Text>
        </View>
    )
};

export default Profile;