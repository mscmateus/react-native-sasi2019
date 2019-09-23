import React from "react"
import {View,Text} from "react-native"

export default class Titulo extends React.Component{
    render(){
        return(
            <View
            style={{alignItems: "center", margin: 20}}
            >
                <Text style={{fontSize:50, color: "#66dbfc"}}>Random</Text>
                <View>
                    <Text style={{fontSize:15, color:"#ffffff", alignItems: "center"}}>Frases motivadoras para programadores</Text>
                </View>
            </View>
        )
    }
}