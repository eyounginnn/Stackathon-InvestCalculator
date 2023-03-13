import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../../navigation/TabNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/mainNav';
import DeliveryCard from '../../components/DeliveryCard';

type OrderScreenRouteProp = RouteProp<MainStackParamList, "Order">;

export type OrdersScreenNavigationProp = CompositeNavigationProp< BottomTabNavigationProp<TabStackParamList, "Orders">, NativeStackNavigationProp<MainStackParamList>>;

const OrderScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<OrdersScreenNavigationProp>()
    const {
        params: {order},
    } = useRoute<OrderScreenRouteProp>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: "#EB6A7C",
            headerTitleStyle: {color: "black"},
            headerBackTitle: "Deliveries",
        });
    }, [order]);

  return (
    <View style={tw('-mt-2')}>
      <DeliveryCard order={order} fullWidth/>
    </View>
  )
}

export default OrderScreen;