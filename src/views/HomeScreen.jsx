import React from "react";
import { Text, View,Image, Pressable,StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';



export default props => {

    return(
        <View style={style.body}>
            <Text style={style.text}>GF Grafica</Text>

            <Pressable style={style.img}>
                {/* <Image source={require('../images/homeLogo.png')} style={style.imgFt}/> */}
            </Pressable>

            <Pressable style={style.button} onPress={()=> props.navigation.navigate('Product')}>
                <Text style={style.textBtn}>Entrar</Text>
                <Icon name="arrow-forward-circle-sharp" size={25} color="#FFF"/>
            </Pressable>
        </View>
    )
}


const style = StyleSheet.create(
    {   
        body:{
            backgroundColor:"#fff",
            flexGrow:1
        },
        text:{
            fontSize:40,
            fontWeight:"bold",
            color: "black",
            fontFamily:"Pixelify Sans",
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            marginTop: 45
        },
        img:{
            alignItems:"center",
            marginTop: 200,
        },
        imgFt:{
            width:300,
            height:250,
            transform: [{skewY: '-15deg'}],
        },
        button:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop: 150,
            marginLeft:45,
            paddingLeft:20,
            paddingRight:20,
            width:320,
            height:50,
            borderRadius:5,
            backgroundColor:"#1E74C0",
        },
        textBtn:{
            color:"#FFF",
            fontSize:15,
            fontStyle: 'italic',
            fontWeight:"bold",
            
        }

    }
)