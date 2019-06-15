import React from 'react';
const { createAppContainer, createStackNavigator } = require('react-navigation');
import { Image } from 'react-native';

import logo from './assets/logo.png';

import Feed from './pages/Feed';
import New from './pages/New';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
            //initialRouteName: 'New',
            defaultNavigationOptions: {
                headerTintColor: '#000',
                headerTitle: <Image style={{ marginHorizontal: '40%' }} source={logo} />,
                headerBackTitle: null,
            },
            mode: 'modal',
        })
);
