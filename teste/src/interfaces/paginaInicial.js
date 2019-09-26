import React from "react"
import {View, Text, Button} from "react-native"
import {Actions} from "react-native-router-flux"

export default class PaginaInicial extends React.Component{
  render(){
    return(
      <View
      style={{backgroundColor: "#6363ff", flex: 1, alignItems: "center"}}
      >
        <Text style={{color:"#ffffff", fontSize: 50, padding: 10}}>Sasi 2019</Text>
        <Button
        title={"cronograma"}
        onPress={()=>{Actions.cronograma()}}
        />
        <Button
        title={"sobre o evento"}
        onPress={()=>{Actions.sobresasi()}}
        />
      </View>
    )
  }
}