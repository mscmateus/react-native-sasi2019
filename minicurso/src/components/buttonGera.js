import React from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"


//propriedades da classe: acao
export default class ButtonGera extends React.Component{
    render(){
        return(
            <TouchableOpacity
            style={{
                alignItems:"center",
                padding: 20,
                backgroundColor: "#ffffff",
                marginHorizontal: 60,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            }}
            onPress={()=>{this.props.acao()}}
            >
                <Text style={{color: "#333a59"}}>Gerar Frase</Text>
            </TouchableOpacity>
        )
    }
}