import React from "react";
import "./styles.css";
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
import imgBtnClose from './assets/close.png'
import CardVideo from "./components/CardVideo";

export default function App() {

  const myVideos = [
    {
      filmTitle: "Circulo de Fogo - 2001",
      image: img1,
      authorName: 'Jean-Jacques Annaud',
      authorPhoto: photo1,
      link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Uc4PN3YIylw" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
      filmTitle: "Lendas de uma Paixão - 1995",
      image: img2,
      authorName: 'Edward Zwick',
      authorPhoto: photo2,
      link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zEz3MWpDC7E" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
      filmTitle: "Vinte mil leguas submarinas - 1954",
      image: img3,
      authorName: 'Richard Fleischer',
      authorPhoto: photo3,
      link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/tMyzDHG8o3o"
                 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
      filmTitle: "A Lista de Schindler - 1994",
      image: img4,
      authorName: 'Steven Spielberg',
      authorPhoto: photo4,
      link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/tSHqEBhQx8M" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
      filmTitle: "Avatar - 2009",
      image: img5,
      authorName: 'James Cameron',
      authorPhoto: photo5,
      link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/0Jgk65L6VxM" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
      filmTitle: "Mulher Maravilha - 2017",
      image: img6,
      authorName: 'Patty Jenkins',
      authorPhoto: photo6,
      link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/tqfOtQ5auBA" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowfullscreen></iframe>`
    },
    {
      filmTitle: "Independe Day - 1996",
      image: img7,
      authorName: 'Roland Emmerich',
      authorPhoto: photo7,
      link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/B1E7h3SeMDk" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>`
    },
    {
      filmTitle: "Uma Linda Mulher - 1990",
      image: img8,
      authorName: 'Garry Marshall',
      authorPhoto: photo8,
      link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/G__hjaG9b6s" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>`
    },
  ]

  function closeMovie() {
    document.querySelector(".video").innerHTML = ""
    document.querySelector('#container-trailer').classList.toggle('hide')
    document.querySelector('body').classList.toggle('fix')
  }

  return (
    <div>
      <span id="foo"></span>
      <div className="tela-inteira">

        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>
        <div id="container-trailer" className="trailer hide">
          <div id='control'>
            <div id="video" className="video hide">
            </div>
            <img className="btnClose" onClick={closeMovie} src={imgBtnClose} />
          </div>
        </div>
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

        </main>
        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}


