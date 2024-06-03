import React from "react";
import { SafeAreaView, Text, Image, StyleSheet, View, Pressable } from "react-native";
import { Card } from '@rneui/themed';
 
export default props => {
    return(
        <View>
            <View style={{flexDirection: 'row'}}>
                <Image
                source={require('../image/barra.png')}
                style={topo.barra}/>
                {/* <Image
                source={require('../image/flor.png')}
                style={topo.logo}/> */}
                <Image
                source={require('../image/usuario.png')}
                style={topo.usuario}/>
            </View>
           
               
            <Card style={cartao.lados}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../image/gmail.png')}
                    style={style.mail}/>
                    <Card.Title>Adriana</Card.Title>
                </View>
                <Text style={style.texto}>CEO da GF Gráfica</Text>
            </Card>
 
            <Card style={direcao.posicao}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../image/telefone.png')}
                    style={style.tel}/>
                    <Card.Title>Laryssa Franco</Card.Title>
                </View>
                    <Text style={style.texto}>(11) 97320-5718</Text>
            </Card>
 
            <Card style={direcao.posicao}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../image/whatsapp.png')}
                    style={style.whats}/>
                    <Card.Title>Pedro Almeida</Card.Title>
                </View>
                    <Text style={style.texto}>(11) 97320-5718</Text>
            </Card>

            <Card style={direcao.posicao}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../image/whatsapp.png')}
                    style={style.whats}/>
                    <Card.Title>Thiago</Card.Title>
                </View>
                    <Text style={style.texto}>(11) 97320-5718</Text>
            </Card>

            <Card style={direcao.posicao}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../image/whatsapp.png')}
                    style={style.whats}/>
                    <Card.Title>Vitória</Card.Title>
                </View>
                    <Text style={style.texto}>(11) 97320-5718</Text>
            </Card>
 
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
            </View>
                
                
            
            
            <View style={style.rodapeImg}>
                <Image
                    source={require('../image/gmail.png')}
                    style={imagem.gmail}
                />
                <Image
                    source={require('../image/facebook.png')}
                    style={imagem.facebook}
                />
                <Image
                    source={require('../image/google.png')}
                    style={imagem.google}
                />
            </View>
        </View>
    )
}
 
const cartao = StyleSheet.create(
    {
        lados:{
            borderColor: '#000'
        }
    }
)
 
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
        },
        usuario:{
            width: 30,
            height: 30,
            margin: 5,
        }
    }
)
 
const style = StyleSheet.create(
    {
        mail:{
            width: 20,
            height: 15,
            alignItems: 'center'
        },
        tel:{
            width: 30,
            height: 30,
        },
        whats:{
            width: 30,
            height: 30,
        },
        texto:{
            textAlign: 'center',
            color: '#000'
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
        rodapeImg:{
            flexDirection: 'row',
            alignItems: 'center',
        },
    }
)
 
const direcao = StyleSheet.create(
    {
        posicao:{
            flexDirection: "row",
            alignItems: 'center'
        }
    }
)
 
const imagem = StyleSheet.create(
    {
        gmail:{
            width: 35,
            height: 35,
            alignSelf: 'center',
            margin: 10,
            marginLeft: 100,
        },
        facebook:{
            width: 35,
            height: 35,
            alignSelf: 'center',
            margin: 10,
        },
        google:{
            width: 32,
            height: 32,
            margin: 10,
            // flexDirection: 'row',
        },
        texto:{
            color: '#000'
        }
    }
)