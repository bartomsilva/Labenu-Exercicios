import { useState } from 'react'
import { Carro } from '../Carro'
import { Estacionamento, GaragemContainer } from './styles'
import { Botao} from '../publicStyled'

export function Garagem(props) {

  const [auto, setAuto] = useState({ "model": "popular", "color": "Azul", "year": 2020, "flex": false })
  const [nAuto,setnAuto] = useState(0)

  const cars = [
    {
      model: 'Ferrari Omologata ',
      year: 2020,
      color: 'Vermelho',
      flex: false
    },
    {
      model: 'Icona Vulcano Titanium',
      year: 2015,
      color: 'Prata',
      flex: false
    },
    {
      model: 'Renault Kwid ',
      year: 2023,
      color: 'Azul',
      flex: true
    }
  ]
  
  function changeName() {
    if (props.name == 'da Labenu') {
      props.setName('de Bart')
    } else {
      props.setName('da Labenu')
    }    
  }

  function changeCar() {
    if(nAuto ==2){
      setnAuto(0)
    } else {
      setnAuto(nAuto+1)
    }
    setAuto(cars[nAuto])

  }

  return (
    <GaragemContainer>
      <h1>Garagem {props.name}</h1>
      <Botao onClick={changeName}>Mudar nome</Botao>
      <Botao onClick={changeCar}>Mudar Carro</Botao>
      <Estacionamento>
        <Carro
          auto={auto}
          setAuto={setAuto}
          addBy={props.name}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
