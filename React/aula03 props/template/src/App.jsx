import Garagem from "./Componentes/Garagem";
import "./App.css";
import img1 from './assets/ferrari-vermelho.jpg'
import img2 from './assets/bugatti-chiron.webp'
import img3 from './assets/mercedes-amg.jpg'
import img4 from './assets/fvulcano.jpg'
import img5 from './assets/fordka.jpg'
import img6 from './assets/fordfreestyle.jpg'
import img7 from './assets/fordflex.jpg'
import img8 from './assets/peugeot.jpg'

export default function App() {
  const nameUsers = ['Bart Silva','Ornito Hinto']
  const apresentaGaragem = (name) => {
    alert(`Boas vindas à garagem de ${name}`)
  }
  // primeira garagem
  // car first garage
  const myCarG1 = [
  {
    carName:'Ferrari',
    carColor:'Vermelha',
    carYear: 2023,
    carFlex: false,
    photo: img1 

  },
  {
    carName:'Bugatti Chiron',
    carColor:'Azul',
    carYear: 2023,
    carFlex: false,
    photo: img2 
  },
  {
    carName:'Mercedes AMG',
    carColor:'Branca',
    carYear: 2022,
    carFlex: true,
    photo: img3
  },
  {
    carName:'Fiat Strada Vulcano',
    carColor:'Vermelha',
    carYear: 2022,
    carFlex: false,
    photo: img4

  }
] 
// carros da segunda garagem
// car second garage
const myCarG2 = [
  {
    carName:'Ford Ka',
    carColor:'Marrom',
    carYear: 2019,
    carFlex: false,
    photo: img5
  },
  {
    carName:'Ford Freestyle Titanium Plus',
    carColor:'Petrol',
    carYear: 2018,
    carFlex: false,
    photo: img6
  },
  {
    carName:'Ford flex 3.5',
    carColor:'Azul',
    carYear: 2009,
    carFlex: true,
    photo: img7
  },
  {
    carName:'Peugeot',
    carColor:'Amarelo',
    carYear: 2019,
    carFlex: false,
    photo: img8
  }
] 
  return (
    <div id='garage'>
      <Garagem nameUser={nameUsers[0]} apresentaGaragem={apresentaGaragem} myCar={myCarG1} />
      <Garagem nameUser={nameUsers[1]} apresentaGaragem={apresentaGaragem} myCar={myCarG2} />
     </div>
  );
}

