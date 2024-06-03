import React, { useState }  from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Alert, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from '@rneui/themed';
import { CheckBox, } from '@rneui/themed';
import { Image } from "@rneui/base";


export default props =>{

    const [checked, setState] = React.useState(true);
    const toggleCheckbox = () => setState(!checked);

    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return(
        <View>
            <View style={{flexDirection: 'row'}}>
                <Image
                    source={require('../image/barra.png')}
                    style={topo.barra}
                />
                {/* <Image
                source={require('../images/flor.png')}
                style={topo.logo}/> */}
                <View style={topo.usuarioLocal}>
                    <Pressable onPress={()=> props.navigation.navigate('Product')}>
                        <Image
                        source={require('../image/usuario.png')}
                        style={topo.usuario}/>
                    </Pressable>
                </View>
            </View>

            <View style={{flexDirection: "row"}}>
                <View>
                    <Image
                        source={require('../image/envelope.png')}
                        style={style.envelope}/>
                </View>
                <View style={direcao.dimensao}>
                    <Pressable style={style.containerAlinhamento}>
                        <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Modelo"
                        placeholderTextColor="#B3C8CF"
                        style={envelope.modelo}
                        />
                    </Pressable>
                    <Pressable style={style.containerAlinhamento}>
                        <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Formato"
                        placeholderTextColor="#B3C8CF"
                        style={envelope.formato}
                        />
                    </Pressable>
                    <Pressable style={style.containerAlinhamento}>
                        <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Material"
                        placeholderTextColor="#B3C8CF"
                        style={envelope.material}
                        />
                    </Pressable>
                    <Pressable style={style.containerAlinhamento}>
                        <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Quantidade"
                        placeholderTextColor="#B3C8CF"
                        style={envelope.quantidade}
                        />
                    </Pressable>
                    <View style={style.frete}>
                        <Text>Prazo de produção: </Text>
                        <Text>5 dias úteis + frete</Text>
                    </View>
                </View>
            </View>
            
            <View style={style.venda}>
                <View style={style.textBtn}>
                    <Pressable
                        style={({pressed}) => [
                        {
                            backgroundColor: pressed,
                        },
                        style.button1, 
                        ]}
                        onPress={()=> props.navigation.navigate('Login')}>   
                        <TouchableOpacity onPress={onPress}>
                            <Text style={style.textBtn}>Comprar</Text>
                        </TouchableOpacity>
                    </Pressable>
                </View>
                    <View style={style.textBtn}>
                    <Pressable
                        style={({pressed}) => [
                        {
                        backgroundColor: pressed,
                        },
                        style.button2, 
                        ]}
                        onPress={() => {Alert.alert('Bem Vindo')}}>   
                        <TouchableOpacity onPress={onPress}>
                            <Text style={style.textBtn}>Adicionar carrinho</Text>
                        </TouchableOpacity>
                        
                    </Pressable>
                </View>
            </View>

            <View>
                <Text style={style.avaliacao}>Avaliações</Text>
            </View>
            
            
            <View style={style.card}>
                <Card style={direcao.posicao}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                        source={require('../image/telefone.png')}
                        style={style.tel}/>
                        <Card.Title>Maria</Card.Title>
                    </View>
                        <Text style={style.texto}>Entrega rápida, dentro do prazo e com valor acessivel</Text>
                </Card>
                <Card style={direcao.posicao}>
                    <View style={{flexDirection: 'row'}}>
                        <Card.Title>Maria</Card.Title>
                        <View>
                            <CheckBox
                            checked={checked}
                            onPress={toggleCheckbox}
                            iconType="material-community"
                            checkedIcon="heart"
                            uncheckedIcon="heart-outline"
                            // checkedColor="red"
                            />
                        </View>
                    </View>
                    <Text style={style.texto}>Entrega rápida, dentro do prazo e com valor acessivel</Text>
                </Card>
                <Card style={direcao.posicao}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                        source={require('../image/telefone.png')}
                        style={style.tel}/>
                        <Card.Title>Maria</Card.Title>
                    </View>
                    <Text style={style.texto}>Entrega rápida, dentro do prazo e com valor acessivel</Text>
                </Card>
            </View>



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
        usuario:{
            width: 30,
            height: 30,
            margin: 5,
        },
        usuarioLocal:{
            alignItems: 'right',
        },
    }
)

const style = StyleSheet.create(
    {
        envelope:{
            width: 140,
            height: 170,
            margin: 15,
        },
        rodapeTxt1:{
            flexDirection: 'row',
            textAlign: 'center',
            margin: 10,
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
        containerAlinhamento:{
            flexDirection:"row",
            margin: 2,
            borderRadius: 5,
            height: 30,
            width: 200,
            marginLeft: 20,
            backgroundColor: '#1E74C0',
            color: "#000",
            textAlign: 'center',
        },
        textBtn:{
            color: "#FFF",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:15
        },
        button1:{
            width: 150,
            height: 40,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius: 5,
            marginTop: 10,
            marginBottom: 5,
            marginLeft: 40,
        },
        button2:{
            width: 150,
            height: 40,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius: 5,
            marginTop: 10,
            marginBottom: 5,
            marginLeft: 10,
        },
        venda:{
            flexDirection: 'row',
        },
        frete:{
            marginLeft: 60,
            // margin: 5,
        },
        card:{
            flexDirection: 'row',
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
        avaliacao:{
            textAlign: 'center',
            fontSize: 15,
            marginTop: 5,
            marginBottom: 5,
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

const direcao = StyleSheet.create(
    {
        posicao:{
            // flexDirection: "row",
            alignItems: 'center',
            width: 100,
            height: 100,
        },
        dimensao:{
            marginTop: 30,
        }
    }
)

const envelope = StyleSheet.create(
    {
        modelo:{
            marginTop: -5,
        },
        formato:{
            marginTop: -5,
        },
        material:{
            marginTop: -5,
        },
        quantidade:{
            marginTop: -5,
        },
    }
)
