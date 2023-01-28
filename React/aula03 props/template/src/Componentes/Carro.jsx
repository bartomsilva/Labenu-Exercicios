export default function Carro(props) {
  return (
    <div className="car">
      <div>
        <h2>{props.myCar.carName}</h2>
        <ul>
          <li>Cor: {props.myCar.carColor}</li>
          <li>Ano: {props.myCar.carYear}</li>
          <li>Flex: {props.myCar.carFlex ? 'Sim' : 'Não'} </li>
        </ul>
      </div>
      <div className="car-img-container">
        <img src={props.myCar.photo}></img>
      </div>
    </div>
  );
}

 
