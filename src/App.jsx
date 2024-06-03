import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './views/HomeScreen';
import ContactScreen from './views/ContactScreen';
import LoginScreen from "./views/LoginScreen";
import ProductScreen from "./views/ProductScreen";
import Sale from "./views/SaleScreen";
import Envelope from "./views/EnvelopeScreen";
import RegisterScreen from "./views/RegisterScreen";
import SenhaScreen from "./views/SenhaScreen";
import SobreScreen from "./views/SobreScreen";
import Home from './routes/Home';
import FimList from './views/FimList';
import CompraScreen from './views/CompraScreen';
import Teste from './views/Teste';


const Stack = createNativeStackNavigator()

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Home" component={HomeScreen} options={{
                        headerShown: false
                        }}/>
                    <Stack.Screen name="Product" component={ProductScreen} options={{
                    headerTitle:"",
                    headerStyle:{backgroundColor:"#FFF"},
                    headerTransparent:10
                        }}/>
                    <Stack.Screen name="Contact" component={ContactScreen} options={{
                    headerTitle:"",
                    headerStyle:{backgroundColor:"#FFF"},
                    headerTransparent:10
                        }}/>
                    <Stack.Screen name="Sale" component={Sale} options={{
                        headerTitle:"",
                        headerStyle:{backgroundColor:"#FFF"},
                        headerTransparent:10
                    }}/> */}
                    <Stack.Screen name="Envelope" component={Envelope} options={{
                       headerTitle:"",
                       headerStyle:{backgroundColor:"#FFF"},
                       headerTransparent:10 
                    }}/>
                    <Stack.Screen name="Login" component={LoginScreen} options={{
                       headerTitle:"",
                       headerStyle:{backgroundColor:"#FFF"},
                       headerTransparent:10 
                    }}/>
                    {/* <Stack.Screen name="Register" component={RegisterScreen} options={{
                       headerTitle:"",
                       headerStyle:{backgroundColor:"#FFF"},
                       headerTransparent:10 
                    }}/> */}
                    {/* <Stack.Screen name="Senha" component={SenhaScreen} options={{
                       headerTitle:"",
                       headerStyle:{backgroundColor:"#FFF"},
                       headerTransparent:10 
                    }}/> */}
                    {/* <Stack.Screen name="Sobre" component={SobreScreen} options={{
                       headerTitle:"",
                       headerStyle:{backgroundColor:"#FFF"},
                       headerTransparent:10 
                    }}/> */}
                    {/* <Stack.Screen name='Fim' component={FimList} options={{
                        headerTitle:"",
                        headerStyle:{backgroundColor:"#FFF"},
                        headerTransparent:10 
                    }}/> */}
                    {/* <Stack.Screen name="Compra" component={CompraScreen} options={{
                       headerTitle:"",
                       headerStyle:{backgroundColor:"#FFF"},
                       headerTransparent:10 
                    }}/> */}
                    {/* <Stack.Screen name="Teste" component={Teste} options={{
                       headerTitle:"",
                       headerStyle:{backgroundColor:"#FFF"},
                       headerTransparent:10 
                    }}/> */}

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}
 
const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor: "#D4E2F3",
            flexGrow: 1,    
        }
    }
)