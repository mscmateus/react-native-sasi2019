import React from "react"
import {View, Text} from "react-native"
import {Scene, Router} from "react-native-router-flux"

import Cronograma from "./src/interfaces/cronograma"
import PaginaInicial from "./src/interfaces/paginaInicial"
import sobreSasi from "./src/interfaces/sobreSasi"
import SobreSasi from "./src/interfaces/sobreSasi"

export default class Routers extends React.Component{
  render(){
    return(
        <Router>
            <Scene
            navigationBarStyle={{backgroundColor: "#babaca"}}
            key="root"
            >
                <Scene
                title={"Página Inicial"}
                key="paginainicial"
                component={PaginaInicial}
                />
                <Scene
                title={"Cronograma"}
                key="cronograma"
                component={Cronograma}
                />
                <Scene
                title={"Sobre o sasi"}
                key="sobresasi"
                component={SobreSasi}
                />
            </Scene>
        </Router>
    )
  }
}