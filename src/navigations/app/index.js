import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from "../tabs";
import { 
    ChooseCourse, 
    StudentList, 
    AddClass, 
    AddStudent } from 'scenes';

const AppStack = createStackNavigator();
const AppStackScreen = () => (
    <AppStack.Navigator headerMode="none">
         <AppStack.Screen name="Home" component={BottomTab}/>
         <AppStack.Screen name="ChooseCourse" component={ChooseCourse}/>
         <AppStack.Screen name="StudentList" component={StudentList}/>
         <AppStack.Screen name="AddClass" component={AddClass}/>
         <AppStack.Screen name="AddStudent" component={AddStudent}/>
    </AppStack.Navigator>
)

export default AppStackScreen;