import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/Login/index'
import SignUp from '../pages/SignUp/index1'
import index2 from '../pages/SignUp/index2'
import ex from '../pages/SignUp/ex'
import SignUp1 from '../pages/SignUp/index1'
import SignUp2 from '../pages/SignUp/index2'
import SignUp3 from '../pages/SignUp/index3'
import Quiz from '../pages/SignUp/ex';



const AuthStack = createStackNavigator();

const screenOptions = {
  headerShown: true,
  headerTransparent : true,
  headerShadowVisible : false,
  headerTitle : ''
}

const AuthRoutes = () => (
  <AuthStack.Navigator screenOptions={screenOptions}>
    <AuthStack.Screen name="SignIn" component={SignIn}/>
    <AuthStack.Screen name="SignUp" component={SignUp}/>
    <AuthStack.Screen name="SignUp1" component={SignUp1}/>
    <AuthStack.Screen name="SignUp2" component={SignUp2}/>
    <AuthStack.Screen name="SignUp3" component={SignUp3}/>
  </AuthStack.Navigator>
);

export default AuthRoutes;