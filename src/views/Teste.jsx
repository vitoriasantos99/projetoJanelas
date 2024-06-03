import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox, } from '@rneui/themed';
import { Card } from '@rneui/themed';
import { Image } from "@rneui/base";

export default props =>{

    const [checked, setState] = React.useState(true);
     const toggleCheckbox = () => setState(!checked);

     return(
        <View>
            <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="heart"
            uncheckedIcon="heart-outline"
            // checkedColor="red"
            title={'Maria'}
            />
            <Card >
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../image/telefone.png')}
                    />
                    <Card.Title>Maria</Card.Title>
                </View>
                <Text>Entrega rápida, dentro do prazo e com valor acessivel</Text>
            </Card>
            
            </View>
    )
}

const style = StyleSheet.create(
    {
        coracao:{

        }
    }
)