import React from "react"
import NavBar from "./componentes/NavBar/NavBar"
import ItenListContainer from "./componentes/ItemListContainer/ItemListContainer"


const App = () => {

  return (
    <>
      <NavBar/>
      <ItenListContainer greeting = {"Bienvenidos, proximamente *Distribuidora Frighor*"}/>
    </>
  )
}

export default App
