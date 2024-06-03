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
                <Card.Title>E-MAIL:</Card.Title>
            </View>
 
            <Text style={style.texto}>contato@grgraf.com.br</Text>
            <Text style={style.texto}>De Segunda a Sexta</Text>
            <Text style={style.texto}>Das 09:00 às 17:00</Text>
            </Card>
 
            <Card style={direcao.posicao}>
 
            <View style={{flexDirection: 'row'}}>
                <Image
                source={require('../image/telefone.png')}
                style={style.tel}/>
                <Card.Title>TELEFONE:</Card.Title>
            </View>
 
                <Text style={style.texto}>(11) 97320-5718</Text>
                <Text style={style.texto}>De Segunda a Sexta</Text>
                <Text style={style.texto}>Das 09:00 às 17:00</Text>
            </Card>
 
            <Card style={direcao.posicao}>
           
            <View style={{flexDirection: 'row'}}>
                <Image
                source={require('../image/whatsapp.png')}
                style={style.whats}/>
                <Card.Title>WHATSAPP:</Card.Title>
            </View>
                <Text style={style.texto}>(11) 97320-5718</Text>
                <Text style={style.texto}>De Segunda a Sexta</Text>
                <Text style={style.texto}>Das 09:00 às 17:00</Text>
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
            width: 35,
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