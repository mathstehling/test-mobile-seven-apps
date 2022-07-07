import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, HomeScreen, MusicsScreen, PlaylistsScreen } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomBar } from '../../components';

export const ModelNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomBar {...props} />}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Playlists" component={PlaylistsStackScreen} />
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name='Home' component={HomeScreen} />
            <HomeStack.Screen name='Music' component={MusicsScreen} />
        </HomeStack.Navigator>
    )
}

const PlaylistsStack = createNativeStackNavigator();

export const PlaylistsStackScreen = () => {
    return (
        <PlaylistsStack.Navigator screenOptions={{ headerShown: false }}>
            <PlaylistsStack.Screen name='Playlists' component={PlaylistsScreen} />
            <PlaylistsStack.Screen name='Music' component={MusicsScreen} />
        </PlaylistsStack.Navigator>
    )
}
