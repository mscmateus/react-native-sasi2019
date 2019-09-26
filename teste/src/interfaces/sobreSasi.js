import React from "react"
import {View, Text} from "react-native"

export default class SobreSasi extends React.Component{
  render(){
    return(
      <View
      style={{backgroundColor: "#6363ff", flex: 1, alignItems: "center"}}
      >
        <Text>O Simpósio Acreano de Sistemas de Informação é promovido pela UFAC desde 2011.
          É um evento acadêmico voltado a apresentar e discutir tópicos relevantes e atuais 
          em Sistemas de Informação, além disso visa a integração entre discentes, docentes 
          e profissionais de TI. O SASI 2019 contará com palestras, minicursos, apresentações
           de trabalhos e uma mesa redonda sobre a profissão. O evento acontecerá no Anfiteatro 
           Garibaldi Brasil, de 23 a 25 de setembro no horário de 8 às 12h.</Text>
      </View>
    )
  }
}