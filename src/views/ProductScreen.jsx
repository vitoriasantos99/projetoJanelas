import React from "react";
import { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet, View, TextInput, Button, Pressable, Alert, PermissionsAndroid } from "react-native";
import { Card } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
 
export default props => {
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    return(
        <View style={style.body}>

            

            <View style={{flexDirection: 'row'}}>
            <Image
                source={require('../image/logo.png')}
                style={topo.logo}/>

            <TextInput
                style={topo.pesquisa}
                onChangeText={setSearch}
                value={search}
                placeholder="Pesquisar..."
                placeholderTextColor="#000"
                keyboardType="email-address"
                cursorColor="#000"
            />
                <Pressable onPress={()=> props.navigation.navigate('Login')}>
                    <Image
                    source={require('../image/usuario.png')}
                    style={topo.usuario}/>
                </Pressable>
            </View>
 
            <Text style={style.texto1}>Os Mais Vendidos</Text>
 
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Pressable onPress={()=> props.navigation.navigate('Envelope')}>
                    <Image
                        source={require('../image/envelope.png')}
                        style={style.envelope}/>
                        <Text style={style.texto}>Envelope</Text>
                    </Pressable>
                </View>

                <View>
                    <Image
                        source={require('../image/cartao.png')}
                        style={style.cartao}/>
                    <Text style={style.texto}>Cartão de visita</Text>
                </View>

                <View>
                    <Image
                        source={require('../image/banner.png')}
                        style={style.banner}/>
                    <Text style={style.texto}>Banner</Text>
                </View>
            </View>

                <View style={{flexDirection: 'row'}}>
                    <Image 
                        source={require('../image/news.png')}
                    />
                    <TextInput
                        style={style.fundo}
                        onChangeText={setText}
                        value={text}
                        placeholder=""
                        placeholderTextColor="#000"
                        keyboardType="email-address"
                        cursorColor="#000"
                    />
                    </View>
                    <View>  
                        <Pressable 
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button,
                            ]}
                            onPress={() => {Alert.alert('Inscrito')}}>
                                <Text style={style.textBtn}>Inscreva-se</Text>
                        </Pressable>
                    </View>
                



            <Pressable style={style.buttonTodos} onPress={()=> props.navigation.navigate('Sale')}>
                <Text style={style.mais}>Ver todos</Text>
            </Pressable>
            
 
            <View style={{flexDirection:"row"}}>
                <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Product')}>
                    <View style={style.rodapeTxt1}><Text>Produtos</Text></View>
                </Pressable>
                <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Contact')}>
                    <View style={style.rodapeTxt2}><Text>Contatos</Text></View>
                </Pressable>
                <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Sobre')}>
                    <View style={style.rodapeTxt3}><Text>Sobre Nós</Text></View>
                </Pressable>       

                <View style={style.rodapeImg}>
                <Image
                    source={require('../image/whatsapp.png')}
                    style={imagem.whats}
                />
                <Image
                    source={require('../image/facebook.png')}
                    style={imagem.facebook}
                />
                <Image
                    source={require('../image/instagram.png')}
                    style={imagem.insta}
                />
                </View>
            </View>
        </View>    
    )
}

 
 
 
const topo = StyleSheet.create(
    {
        barra:{
            width: 35,
            height: 30,
            margin: 5,
            
        },
        logo:{
            width: 35,
            height: 30,
            margin: 5,
            marginRight: 30,
            marginTop: 12,
            
        },
        usuario:{
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 30,
            marginTop: 12,

        },
        pesquisa:{
            // textAlign: 'center',
            borderWidth: 1,
            height: 35,
            width: 230,
            margin: 10,
            borderColor: '#1E74C0',
            // marginLeft: 150,
            // marginTop: 60,
            // marginLeft: 20,
            borderRadius:10,
            // fontSize: 15,
        },
    }
)
 
const style = StyleSheet.create(
    {
        
        body:{
            backgroundColor:"#FFF",
            flexGrow:1
        },
        texto1:{
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
        },
        mais:{
            textAlign: 'right',
            color: '#000',
            margin: 5,
        },
        envelope:{
            width: 140,
            height: 170,
            margin: 15,
        },
        cartao:{
            width: 100,
            height: 60,
            margin: 15,
            alignItems: 'center',
        },
        banner:{
            width: 50,
            height: 50,
            margin: 15,
        },
        rodapeTxt1:{
            flexDirection: 'row',
            textAlign: 'center',
            margin: 10,
            marginLeft: 20,

        },
        rodapeTxt2:{
            flexDirection: 'row',
            textAlign: 'center',
            margin: 10,

        },
        rodapeTxt3:{
            flexDirection: 'row',
            textAlign: 'center',
            margin: 10,
        },
        rodapeImg:{
            flexDirection: 'row',
            alignItems: 'center',
        },
        fundo:{
            // textAlign: 'center',
            borderWidth: 1,
            height: 30,
            width: 250,
            margin: 10,
            borderColor: '#1E74C0',
            alignItems: 'flex-end',
            marginTop: 60,
            marginLeft: 20,
            // borderRadius: 10,
            // fontSize: 15,
        },
        button:{
            width:150,
            height:30,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            // borderRadius:10,
            marginTop: 2,
            marginLeft: 180,
        },
        textBtn:{
            color: "#FFF",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:15,
        },
        buttonTodos:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop: 10,
            marginLeft: 295,
            paddingLeft:20,
            paddingRight:20,
            width:320,
            height:50,
        }
    }
)
 
const imagem = StyleSheet.create(
    {
        whats:{
            width: 20,
            height: 20,
            alignSelf: 'center',
            margin: 10,
        },
        facebook:{
            width: 20,
            height: 20,
            alignSelf: 'center',
            margin: 10,
        },
        insta:{
            width: 22,
            height: 22,
            alignSelf: 'center',
            margin: 10,
        },
        texto:{
            color: '#000'
        }
    }
)


