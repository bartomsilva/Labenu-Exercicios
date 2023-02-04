import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem( props ) {
  function changeName(){
    if(props.name=='Labenu'){
      props.setName('Bart')
    } else {
      props.setName('Labenu')
    }
  }
  return (
    <GaragemContainer>
      <h1>Garagem da {props.name}</h1>
      <Botao onClick={changeName}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          prop={props.auto.model}
          ano={props.auto.year}
          adicionadoPor={props.name}
          cor={props.auto.color}
          flex={props.auto.flex}
        />
      </Estacionamento>
    
    </GaragemContainer>
  )
}
