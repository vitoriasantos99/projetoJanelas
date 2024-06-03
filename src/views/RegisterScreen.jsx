import React from "react";
import { View,Image, Text, StyleSheet, Pressable, TextInput, Alert} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {

    return(
        <View style={style.body}>
            {/* <Pressable style={style.contImg}>
            <Image source={require('../image/logo.png')} style={style.img}/>
            </Pressable> */}

            <Text style={style.textRegistre}>Register</Text>

            <Pressable style={style.contAlinhamentoBox}>
            

            <Pressable style={style.box}>
                <Image
                    source={require('../image/gmail.png')}
                    style={imagem.gmail}
                />
                </Pressable>

                <Pressable style={style.box}>
                <Image
                    source={require('../image/facebook.png')}
                    style={imagem.facebook}
                />
                </Pressable>

                <Pressable style={style.box}>
                <Image
                    source={require('../image/google.png')}
                    style={imagem.google}
                />
                </Pressable>

            </Pressable>

            <Text style={style.text}>Or, register with email...</Text>

                <Pressable style={style.container}>
                <Pressable style={style.containerAlinhamento}>
                        <Icon name="person-outline" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="person"
                        keyboardType="name-phone-pad"
                        placeholder="Full Name"
                        placeholderTextColor="#B3C8CF"
                        />
                    </Pressable>

                <Pressable style={style.containerAlinhamento}>
                        <Icon name="at" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Email ID"
                        placeholderTextColor="#B3C8CF"
                        />
                    </Pressable>

                <Pressable style={style.containerAlinhamento}>
                        <Icon name="key" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="passaword"
                        keyboardType="name-phone-pad"
                        placeholder="Password"
                        placeholderTextColor="#B3C8CF"
                        />
                    </Pressable>

                <Pressable style={style.containerAlinhamento}>
                        <Icon name="key" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="Confirmpassword"
                        keyboardType="name-phone-pad"
                        placeholder="Confirm Password"
                        placeholderTextColor="#B3C8CF"
                        />
                    </Pressable>

                    <Pressable style={style.containerAlinhamento}>
                        <Icon name="calendar-outline" size={18} color="#000"/>
                        <TextInput
                        textAlign="right"
                        label="Date"
                        keyboardType="name-phone-pad"
                        placeholder="Date od Birth"
                        placeholderTextColor="#B3C8CF"
                        />
                    </Pressable>
                </Pressable>

                <Pressable style={style.container}>
                    <View style={style.textBtn}>
                        <Pressable
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Cadastro realizado com sucesso!')}}>   
                            <Text style={style.textBtn}>Cadastrar</Text>
                        </Pressable>
                    </View>
                </Pressable>
                <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Login')}>
                    <Text  style={style.text}>Já possuo cadastro!</Text>
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
            paddingTop:30,
            marginBottom:15,
            transform: [{skewY: '-5deg'}],
        },
        img:{
            width:400,
            height:300,
        },
        textRegistre:{
            fontSize:25,
            fontFamily: "Pixelify Sans",
            fontWeight:"bold",
            color:"black",

            marginTop:10,
            marginLeft:55

        },
        contAlinhamentoBox:{
            flexDirection:"row",
            justifyContent:"space-around",
            margin:25
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
        text:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            color:"#000",
            fontSize:15,
        },
        container:{
            paddingLeft:10,
            margin:25
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
        google:{
            width: 25,
            height: 25,
        },
        textBtn:{
            color: "#FFF",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:15
        },
        button:{
            width:300,
            height:50,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            marginTop:10,
        },
        contAlinhamentoText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:'center',
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