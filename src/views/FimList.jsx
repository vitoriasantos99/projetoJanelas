import React, {useState} from "react";
import { View, Alert, Text, FlatList, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { ListItem, Avatar, ThemeProvider } from '@rneui/themed';
import Prods from '../Data/Prods'


export default props => {
    const [num, setNum] = useState(0);

    function aumentar(){
        setNum(num + 1);
        console.log(num);
    }

    function diminuir(){
        setNum(num - 1);
        console.log(num);
    }

    function getFimItem({item: prod}){
        return(
        <View>
            <Text>
                Resumo da Compra
            </Text>

            <ScrollView>
                <ThemeProvider>
                    
                    <ListItem>
                        <Avatar 
                            source={{uri: prod.avatarURL}}
                            size={80}/>
                        <View style={{flex:1}}>

                            <ListItem.Content>
                                <ListItem.Title>{prod.name}</ListItem.Title>
                                <ListItem.Title>{prod.descricao}</ListItem.Title>
                                <ListItem.Title>{prod.preco}</ListItem.Title>
                            </ListItem.Content>
                        </View>

                        <ListItem.Chevron
                            name='remove'
                            color='#fff'
                            background='Orange'
                            borderRadius={20}
                            size={30}
                            onPress={diminuir}/>
                        <Text style={{textAlign: 'center', fontSize: 20}}>{num}</Text>
                        <ListItem.Chevron
                            name='add'
                            color="#fff"
                            background='Orange'
                            borderRadius={20}
                            size={30}
                            onPress={aumentar}/>
                    </ListItem>
                </ThemeProvider>
            </ScrollView>
        </View>
        )
    }
    return(
        <View>
            <FlatList
                keyExtractor={Prods => Prods.id.toString()}
                data={Prods}
                renderItem={getFimItem}
            />
            <View>
                <Pressable
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed ? 'orange' : 'gren',
                        },
                        style.button,
                    ]}
                    onPress={() => {Alert.alert('Pedido Enviado')}}>
                        <Text style={style.buttonText}>Continue</Text>
                </Pressable>
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
const style = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        fundo:{
            borderRadius: 8,
            height: 50,
        },
        buttonText:{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: 'white',
        },
        button:{
            borderRadius: 8,
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        body:{
            backgroundColor: '#000',
            borderRadius: 8,
            elevation: 20,
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