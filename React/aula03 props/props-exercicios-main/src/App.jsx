import React from "react";
import "./styles.css";
import CardVideo from "./components/CardVideo";
import img1 from './assets/circulo-de-fogo.jpg';
import img2 from './assets/lendas-de-uma-paixao.jpg';
import img3 from './assets/vintemilleguassubmarinas.jpg';
import img4 from './assets/a-lista-de-schindler.jpg';
import img5 from "./assets/avatar.jpg";
import img6 from "./assets/mulher-maravilha.jpg";
import img7 from './assets/independence-day.jpg';
import img8 from './assets/uma-linda-mulher.jpg';
import photo1 from './assets/circulo-de-fogo-diretor.jpg';
import photo2 from './assets/lendas-de-uma-paixao-diretor.jpg';
import photo3 from './assets/vinte-mil-leguas-submarinas-diretor.jpg';
import photo4 from './assets/a-lista-de-schindler-diretor.jpg';
import photo5 from './assets/avatar-diretor.jpg';
import photo6 from "./assets/mulher-maravilha-diretor.jpg";
import photo7 from './assets/independence-day-diretor.jpg';
import photo8 from './assets/uma-linda-mulher-diretor.jpg';

export default function App() {
 const myVideos= [
  {
    filmTitle: "Circulo de Fogo - 2001",
    image: img1,
    authorName: 'Jean-Jacques Annaud',
    authorPhoto: photo1   
  },
  {
    filmTitle: "Lendas de uma Paixão - 1995",
    image: img2,
    authorName: 'Edward Zwick',
    authorPhoto: photo2   
  },
  {
    filmTitle: "Vinte mil leguas submarinas - 1954",
    image: img3,
    authorName: 'Richard Fleischer',
    authorPhoto: photo3   
  },
  {
    filmTitle: "A Lista de Schindler - 1994",
    image: img4,
    authorName: 'Steven Spielberg',
    authorPhoto: photo4   
  },
    {
    filmTitle: "Avatar - 2009",
    image: img5,
    authorName: 'James Cameron',
    authorPhoto: photo5   
  },
  {
    filmTitle: "Mulher Maravilha - 2017",
    image: img6,
    authorName: 'Patty Jenkins',
    authorPhoto: photo6   
  },
    {
    filmTitle: "Independe Day - 1996",
    image: img7,
    authorName: 'Roland Emmerich',
    authorPhoto: photo7   
  },
    {
    filmTitle: "Uma Linda Mulher - 1990",
    image: img8,
    authorName: 'Garry Marshall',
    authorPhoto: photo8   
  },   
 ]

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>
          <CardVideo myVideo={myVideos}/>          
          {/* <CardVideo/>           */}
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
