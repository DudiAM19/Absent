import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from "../tabs";
import { ChooseCourse, StudentList } from 'scenes';

const AppStack = createStackNavigator();
const AppStackScreen = () => (
    <AppStack.Navigator headerMode="none">
         <AppStack.Screen name="Home" component={BottomTab}/>
         <AppStack.Screen name="ChooseCourse" component={ChooseCourse}/>
         <AppStack.Screen name="StudentList" component={StudentList}/>
    </AppStack.Navigator>
)

export default AppStackScreen;