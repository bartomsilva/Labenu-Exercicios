import Carro from "./Carro";
export default function Garagem(props) {
  return (
    <div>
      <header className="header-garage">
        <h1 >Garagem de {props.nameUser}</h1>
        <button className="btnInfo" onClick={() => props.apresentaGaragem(props.nameUser)}>INFO</button>
      </header>
      <div className="containerCar">
        <Carro myCar={props.myCar[0]} />
        <Carro myCar={props.myCar[1]} />
        <Carro myCar={props.myCar[2]} />
        <Carro myCar={props.myCar[3]} />
      </div>
    </div>
  );
}


