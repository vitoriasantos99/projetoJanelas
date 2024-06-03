import React from "react";
import { Pressable, View, Image, Text, TextInput, StyleSheet, Alert} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default props => {

    return(
        <View style={style.body}>

            {/* <Pressable style={style.contImg}>
                <Image source={require('../image/logo.png')} style={style.img}/>
            </Pressable> */}

            <Pressable style={style.container}>
                <Text style={style.textLogin}>Redefinir senha</Text>
                
                    <Pressable style={style.containerAlinhamento}>
                        <Icon name="at" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Email"
                        placeholderTextColor="#B3C8CF"
                        />
                    </Pressable>

                    <View style={style.textBtn}>
                        <Pressable
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Bem Vindo')}}>   
                            <Text style={style.textBtn}>Redefinir senha</Text>
                        </Pressable>
                    </View>

                    {/* <Pressable style={style.button}>
                        <Text style={style.textBtn}>Login</Text>
                    </Pressable> */}

            </Pressable>


            <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Login')}>
                <Text  style={style.text}>Voltar ao login</Text>
            </Pressable>
            <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Register')}>
                <Text  style={style.text}>Primeiro acesso ?</Text>
            </Pressable>
            

        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            backgroundColor:"#FFF",
            flexGrow:1
        },
        contImg:{
            justifyContent:"center",
            alignItems:"center",
            paddingTop:90,
            transform: [{skewY: '-5deg'}],
        },
        img:{
            width:300,
            height:200,
        },
        container:{
            paddingLeft:10,
            margin:25
        },
        textLogin:{
            fontSize:25,
            fontFamily: "Pixelify Sans",
            fontWeight:"bold",
            color:"black",
            marginBottom:10
        },
        containerAlinhamento:{
            flexDirection:"row",
            alignItems:"center",
            borderBottomWidth:1,    
            borderColor:"#B3C8CF",
            height:40,
            width:320,
            marginTop:15
        },
        button:{
            width:320,
            height:50,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            marginTop:25
        },
        textBtn:{
            color: "#FFF",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:15
        },
        text:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            color:"#000",
            fontSize:15
        },
        text2:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            color:"#1E74C0",
            fontSize:15,
            paddingLeft:4
        },
        contAlinhamentoText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:'center',
        },
        box:{
            borderWidth:1,
            borderColor:"#B3C8CF",
            borderRadius:10,
            width:70,
            height:50,
            alignItems:"center",
            justifyContent:"center"
        },
        contAlinhamentoBox:{
            flexDirection:"row",
            justifyContent:"space-around",
            margin:35
        },
        google:{
            width: 25,
            height: 25,
        },        
    }
)

const imagem = StyleSheet.create(
    {
        gmail:{
            width: 32,
            height: 32,
            alignSelf: 'center',
            margin: 10,
        },
        facebook:{
            width: 30,
            height: 30,
            alignSelf: 'center',
            margin: 10,
        },
        google:{
            width: 30,
            height: 30,
            alignSelf: 'center',
            margin: 10,
            flexDirection: 'row'
        },
        texto:{
            color: '#000'
        }
    }
)