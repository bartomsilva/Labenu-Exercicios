import Carro from "./Carro";
import { useId } from 'react';
export default function Garagem(props) {
  return (
    <div>
      <header className="header-garage">
        <h1 >Garagem de {props.nameUser}</h1>
        <button className="btnInfo" onClick={() => props.apresentaGaragem(props.nameUser)}>INFO</button>
      </header>
      <main className="containerCar" >
        {props.cars.map((car) => (
          <div key={useId()}>
            <Carro car={car} apresentaGaragem={props.apresentaGaragem} nameUser={props.nameUser} />
          </div>
        ))}
      </main>
    </div>
  );
}


