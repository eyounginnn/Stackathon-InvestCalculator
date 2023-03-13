import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNav from './TabNav';
import ModalScreen from '../src/screens/ModalScreen';
import { View, Text } from 'react-native';
import { FC, useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OrderScreen from '../src/screens/OrderScreen';
// import 'firebase/auth';
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
// import auth from '@react-native-firebase/auth';

export type MainStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string }
  Order: { order: Order }
}

const MainStack = createNativeStackNavigator();

const MainNav = () => {

  return (
    <MainStack.Navigator>
      <MainStack.Group>
        <MainStack.Screen name="Main" component={TabNav} />
        {/* { user !== null ? <AppStack /> : <AuthStack />} */}
      </MainStack.Group>
      <MainStack.Group screenOptions={{
        presentation: "modal",
      }}>
        <MainStack.Screen options={{headerShown: false}}name="MyModal" component={ ModalScreen } />
      </MainStack.Group>
      <MainStack.Group>
        <MainStack.Screen name="Order" component={ OrderScreen } />
      </MainStack.Group>
    </MainStack.Navigator>
  );
}


export default MainNav;