import React from "react"
import {View, Text} from "react-native"
import Titulo from "./src/components/titulo"
import Rodape from "./src/components/rodape"
import ButtonGera from "./src/components/buttonGera"

var frases = [
  "Nunca desista dos seus sonhos!",
  "Calma, esse curso não vai ser inútil",
  "Você será o melhor programador!",
  "Você manda no programa, não ele em você",
  "A calma é inimiga da perfeição??????",
  "Nunca deixe pra hoje o que você pode fazer amanhã",
  "Aquilo que se foi, foi e o que é não é mais, reflitão",
  "Rosas são vermelhas e borboletas são azuis",
  "Pague o lanche depois do mini curso, obrigado",
  "Sim você fez isso!",
  "Demorou mais funcionou!",
  "Achou isso massa?",
  "Sem ideia no momento",
  "Essa é a última desisto",
  "Eu ouço funções sem retorno"
]





export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      frase: ''
    }
  }

  _gerarFrase(){
    var numeroAleatorio = Math.floor(Math.random() * 14)
    this.setState({frase: '"'+frases[numeroAleatorio]+'"'})
  } 

  render(){
    return(
      <View
      style={{backgroundColor: "#333a59", flex:1, alignItems:"center"}}
      >
        <Titulo/>
        <Text style={{color: "#ffffff", margin: 30, fontSize: 40}}>{this.state.frase}</Text>
        <ButtonGera
        acao={()=>{this._gerarFrase()}}
        />
        <Rodape/>
      </View>
    )
  }
}