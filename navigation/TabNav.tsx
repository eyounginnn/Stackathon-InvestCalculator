import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdersScreen from '../src/screens/OrdersScreen';
import CustomerScreen from '../src/CustomerScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

export type TabStackParamList = {
    Customers: undefined;
    Orders: undefined;
}

const Tab = createBottomTabNavigator();

const TabNav = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }), [];

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Customers') {
                return (
                    <Icon
                        name= 'users'
                        type="entypo"
                        color= {focused? 'black' : 'gray'} />
                )
            }
            else if (route.name === "Orders") {
                return (
                    <Icon 
                    name="box"
                    type="entypo"
                    color={focused ? "black" : "gray"} />
                )
            }
        }
    })}>
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNav