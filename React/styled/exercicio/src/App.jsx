import React from "react";
import "./styles.css";
import { GlobalStyled } from "./GlobalStyled";
import imgBtnClose from './assets/close.png'
import CardVideo from "./components/cardVideo/CardVideo";
import { myVideos } from "./components/Data";
import { useState } from "react";
import { ContainerTrailer } from "./appstyled";
import { TelaInteira, Main, Header, Footer } from "./appstyled";


export default function App() {

  const [visivel, setVisivel] = useState(false)

  function closeMovie() {
    document.querySelector("#video").innerHTML = ""
    document.querySelector('#container-trailer').classList.toggle('hide')
    document.querySelector('body').classList.toggle('fix')
    setVisivel(false)
  }


  return (
    <TelaInteira>

      <Header>
        <span id="foo"></span>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </Header>

      <ContainerTrailer ver={visivel} id="container-trailer">
        <div id='control'>
          <div id="video">
          </div>
          <img className="btnClose" onClick={closeMovie} src={imgBtnClose} />
        </div>
      </ContainerTrailer>

      <Main>
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
        <>
          <CardVideo myVideo={myVideos} visible={visivel} setView={setVisivel} />
        </>
      </Main>

      <Footer>
        <h4>Sucesso não vem, temos que ir buscar!</h4>
        <h4>OZEMELA é top das galáxias!</h4>
      </Footer>

    </TelaInteira>
  );
}


