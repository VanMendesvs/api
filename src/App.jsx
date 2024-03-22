
//Axios: Biblioteca que permite fazer a ligaçao cliente(Usuario) e servidor (BD)
import React, {useState, useEffect} from "react"
import axios from "axios" //Biblioteca que usaremos para consumir API

import * as S from "./ApiStyle"


function App(){

const [data, setData] = useState([])  

const getData = async () => {
  
const resp = await axios.get('https://api.sampleapis.com/movies/drama')
setData(resp.data)
}

useEffect(() => {
  getData()
},[])


  return(
  <S.Section>
    {data.map(  (item)=>(
      <S.Poster>
      <img src={item.posterURL} alt=""/>
      <h2>{item.title}</h2>
      </S.Poster>
      
    ))}
    </S.Section>
  )
}

export default App