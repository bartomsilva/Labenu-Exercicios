import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`


function App() {

  const [pageActive, setPageActive] = useState("register")

  const returnPage = () => {

    if (pageActive === 'login') {
      return <TelaLogin
        setPageActive={setPageActive} />
    } else if (pageActive === "register") {
      return <TelaCadastro
        setPageActive={setPageActive} />
    } else if (pageActive === "registered") {
      return <TelaUsuarioCadastrado />
    }

  }

  return (
    <MainContainer >
      <GlobalStyled />
      {returnPage()}
    </MainContainer>
  );
}

export default App;