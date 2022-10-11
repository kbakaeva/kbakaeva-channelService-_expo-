import * as React from 'react';
import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../../views/SignIn/SignInScreen';
import { HomeScreen } from '../../views/Home/HomeScreen';

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="ChannelMainScreen" screenOptions={() => ({
            headerShown: false,
            gestureEnabled: false,
        })}>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};