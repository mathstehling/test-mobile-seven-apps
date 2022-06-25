import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ModelNavigator} from '../modules/routes';

export const Routes = () => {
    return (
        <NavigationContainer>
            <ModelNavigator />
        </NavigationContainer>
    );
}