import React from "react";
import { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet, View, TextInput, Button, Pressable, Alert, ScrollView } from "react-native";
import { Card } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {

    const [search, setSearch] = useState('');

    return(
        <View>
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

            <ScrollView style={style.scrollView}>
            <View style={{flexDirection: "row"}}>
                <View>
                    <Image
                        source={require('../image/envelope.png')}
                        style={style.envelope}/>
                </View>
                <View style={envelope.text}>
                    <Text style={style.txtTitulo}>
                        Envelope 
                    </Text>
                        <Text>
                            Á partir de:
                        </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            R$
                        </Text>
                        <Text style={style.valor}>
                            135,00
                        </Text>
                        <Text style={style.unidade}>
                            /un
                        </Text>
                    </View>
                    <Pressable style={style.buttonTodos} onPress={()=> props.navigation.navigate('Envelope')}>
                        <Text>Conferir esse produto</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{flexDirection: "row-reverse"}}>
                <View>
                    <Image
                        source={require('../image/cartao.png')}
                        style={style.cartao}/>
                </View>
                <View style={envelope.carta}>
                    <Text style={style.txtTitulo}>
                        Cartão de Visita 
                    </Text>
                        <Text>
                            Á partir de:
                        </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            R$
                        </Text>
                        <Text style={style.valor}>
                            22,90
                        </Text>
                        <Text style={style.unidade}>
                            /50 uni.
                        </Text>
                    </View>
                    <Pressable style={style.buttonTodos} onPress={()=> props.navigation.navigate('Product')}>
                        <Text>Conferir esse produto</Text>
                    </Pressable>
                </View>
            </View>

            {/* <View style={{flexDirection: "row"}}>
                <View>
                    <Image
                        source={require('../image/banner.png')}
                        style={style.banner}/>
                </View>
                <View>
                    <Text style={style.txtTitulo}>
                        Envelope 
                    </Text>
                        <Text>
                            Á partir de:
                        </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            R$
                        </Text>
                        <Text style={style.valor}>
                            135,00
                        </Text>
                        <Text style={style.unidade}>
                            /un
                        </Text>
                    </View>
                </View>
            </View> */}

            {/* <View style={{flexDirection: "row"}}>
                <View>
                    <Image
                        source={require('../image/envelope.png')}
                        style={style.envelope}/>
                </View>
                <View>
                    <Text style={style.txtTitulo}>
                        Envelope 
                    </Text>
                        <Text>
                            Á partir de:
                        </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            R$
                        </Text>
                        <Text style={style.valor}>
                            135,00
                        </Text>
                        <Text style={style.unidade}>
                            /un
                        </Text>
                    </View>
                </View>
            </View> */}

            {/* <View style={{flexDirection: "row"}}>
                <View>
                    <Image
                        source={require('../image/envelope.png')}
                        style={style.envelope}/>
                </View>
                <View>
                    <Text style={style.txtTitulo}>
                        Envelope 
                    </Text>
                        <Text>
                            Á partir de:
                        </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            R$
                        </Text>
                        <Text style={style.valor}>
                            135,00
                        </Text>
                        <Text style={style.unidade}>
                            /un
                        </Text>
                    </View>
                </View>
            </View> */}

            {/* <View style={{flexDirection: "row"}}>
                <View>
                    <Image
                        source={require('../image/envelope.png')}
                        style={style.envelope}/>
                </View>
                <View>
                    <Text style={style.txtTitulo}>
                        Envelope 
                    </Text>
                        <Text>
                            Á partir de:
                        </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            R$
                        </Text>
                        <Text style={style.valor}>
                            135,00
                        </Text>
                        <Text style={style.unidade}>
                            /un
                        </Text>
                    </View>
                </View>
            </View> */}

            {/* <View style={{flexDirection: "row"}}>
                <View>
                    <Image
                        source={require('../image/envelope.png')}
                        style={style.envelope}/>
                </View>
                <View>
                    <Text style={style.txtTitulo}>
                        Envelope 
                    </Text>
                        <Text>
                            Á partir de:
                        </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            R$
                        </Text>
                        <Text style={style.valor}>
                            135,00
                        </Text>
                        <Text style={style.unidade}>
                            /un
                        </Text>
                    </View>
                </View>
            </View>                */}
 
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
        
            </ScrollView>
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
        usuario:{
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 30,
            marginTop: 12,

        },
        logo:{
            width: 35,
            height: 30,
            margin: 5,
            marginRight: 30,
            marginTop: 12,
            
        },
        usuarioLocal:{
            alignItems: 'right',
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
        scrollView: {
            // backgroundColor: 'pink',
            // marginHorizontal: 20,
        },
        text: {
            fontSize: 42,
        },
        envelope:{
            width: 160,
            height: 190,
            margin: 15,
        },
        cartao:{
            width: 140,
            height: 80,
            margin: 20,
            margin: 15,
        },
        banner:{
            width: 180,
            height: 400,
            margin: 15,
        },
        txtTitulo:{
            fontSize: 25,
            color: 'black',
        },
        valor:{
            textAlign: 'center',
            fontSize: 30,
            color: 'red',
        },
        unidade:{
        },
        buttonTodos:{
            // flexDirection:"row",
            alignItems:"center",
            height: 30,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: '#1E74C0',
            height: 25,
            width: 150,
            margin: 5,
            borderColor: '#1E74C0',
            borderRadius: 5,
            color: 'white'
            // alignItems: 'flex-end'
        },
        buttonUsu:{
            // flexDirection:"row",
            alignItems:"center",
            height: 30,
            borderWidth: 1,
            borderColor: 'black',
            height: 25,
            width: 150,
            margin: 5,
            borderColor: '#1E74C0',
            borderRadius: 5,
            color: 'white'
            // alignItems: 'flex-end'
        },
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

const envelope = StyleSheet.create(
    {
        text: {
            marginTop: 30,
            marginLeft: 15,
        },
        carta:{
            // marginTop: 30,
            marginRight: 15,
        }
    }
)