
import { Botao } from '../publicStyled'
import { CarroContainer } from './styles'

export function Carro(props) {
  return (
      <CarroContainer>
        <h2>{props.auto.model}</h2>
        <ul>
          <li>Cor: {props.auto.color}</li>
          <li>Ano: {props.auto.year}</li>
          <li>Flex: {props.auto.flex ? 'Sim' : 'Não'}</li>
          <li>Adicionado: {props.addBy}</li>
        </ul>
      </CarroContainer>
  )
}
