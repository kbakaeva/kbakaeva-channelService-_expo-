import * as React from 'react';
import { FC } from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigator';


const navigationRef = createNavigationContainerRef();

export const RootNavigation: FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <StackNavigator />
        </NavigationContainer>
    );
};