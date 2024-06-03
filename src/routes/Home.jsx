import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../views/HomeScreen';
import ContactScreen from '../views/ContactScreen';
import LoginScreen from "../views/LoginScreen";
import ProductScreen from "../views/ProductScreen";
import Sale from "../views/SaleScreen";
import Envelope from "../views/EnvelopeScreen";
import RegisterScreen from "../views/RegisterScreen";
import SenhaScreen from "../views/SenhaScreen";
import SobreScreen from "../views/SobreScreen";


const Drawer = createDrawerNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='Product'
                    screenOptions={{
                        drawerActiveBackgroundColor: '#f4a1b5',
                        drawerActiveTintColor: '#e86786',
                    }}/>
                    <Drawer.Screen name='Login' component={LoginScreen}/>
            </NavigationContainer>
        </SafeAreaView>
    )
}