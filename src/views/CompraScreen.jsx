import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default props =>{
    return(
        <View style={{flex: 1}}>
            <Text style={resumo.text}>Resumo da compra</Text>

            <View style={resumo.todos}>
                <View>
                    <Text style={resumo.produto}>Produto</Text>
                </View>
                <View>
                    <Text style={resumo.preco}>Preço Unitário</Text>
                </View>
                <View>
                    <Text style={resumo.quantidade}>Quantidade</Text>
                </View>
            </View>
            <View>
                <Image
                    source={require('../image/cartao.png')}
                    style={imagem.cartao}/>
                <Text style={texto.cartao}>Cartão de visita</Text>
            </View>



        </View>
    )
}

const resumo = StyleSheet.create(
    {
        text:{
            textAlign: 'center',
            fontSize: 25,
            margin: 5,
            color: '#000'
        },
        produto:{
            color: '#000',
            marginRight: 55,
        },
        preco:{
            color: '#000',
            marginRight: 55,
        },
        quantidade:{
            color: '#000',
        },
        todos:{
            flexDirection: 'row',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        }

    }
)

const imagem = StyleSheet.create(
    {
        cartao:{
            width: 100,
            height: 50,
            margin: 15,
        },
    }
)

const texto = StyleSheet.create(
    {
        cartao:{
            textAlign: 'center',
            color: '#000',
        },
    }
)