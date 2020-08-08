import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import studyTabs from './studyTabs';


const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="landing" component={Landing}/>
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="study" component={studyTabs} />
            </Navigator>
        </NavigationContainer>
    );
}