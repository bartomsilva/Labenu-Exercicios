import { useState } from 'react'
import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'

export default function App() {

  const [name,setName]=useState('Labenu')
  const [auto,setAuto]=useState({"model":"popular","color":"Azul","year":2020,"flex":false})

  
  return (
    <div className="App">
      <GlobalStyled />
      <Garagem name={name} auto={auto} setName={setName} />
    </div>
  )
}
