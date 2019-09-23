import React from "react"
import {View, Text, Image} from "react-native"

export default class Rodape extends React.Component{
    render(){
        return(
            <View
            style={{alignItems: "center", margin: 20}}
            >
                <Image
                source={require("../img/logoUfac.png")}
                />
                <Text style={{color: "#66dbfc", fontSize: 30}}>SASI</Text>
                <Text style={{color: "#ffffff"}}>Desenvolvido por Mateus e Gabriel</Text>
            </View>
        )
    }
}