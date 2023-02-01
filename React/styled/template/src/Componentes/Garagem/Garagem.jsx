import { Carro } from "../Carro/Carro";
import { Button, Estacionamento, GaragemContainer } from "./style";
import { HeaderGaragem } from "./style";


export function Garagem(props) {
  return (
    <GaragemContainer>
      <HeaderGaragem>
        <h1>Garagem da {props.nome}</h1>
        <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      </HeaderGaragem>

      <Estacionamento>
        <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} />
        <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"} />
        <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
        <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
      </Estacionamento>
    </GaragemContainer>
  );
}
