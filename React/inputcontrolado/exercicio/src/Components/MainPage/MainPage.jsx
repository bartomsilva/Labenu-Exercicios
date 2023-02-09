import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";

const MainPage = () => {
  const [data, setData] = useState({});
  const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  //3.1 crie aqui os estados dataNascimento, telefone e cidade para o exercício 3
  const [birthDate, setBirthDate] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  //3.2 Crie aqui as funções de onChange do exercício 3
  // 
  const onChangeBirthDate = (event) => {
    setBirthDate(event.target.value)
  }

  const onChangeTelephone = (event) => {
    setTelephone(event.target.value)
  }

  const onChangeCity = (event) => {
    setCity(event.target.value)
  }
  // 

  const sendData = () => {
    setFormFlow(2);
    setData({ ...data, nome, idade, email })
  };

  const sendForm = () => {
    setFormFlow(3);
    setData({ ...data, birthDate, telephone, city })
  };

  const mudarPagina = () => {
    if (formFlow === 1) {
      return (
        <NameForm
          nome={nome}
          idade={idade}
          email={email}
          onChangeNome={onChangeNome}
          onChangeIdade={onChangeIdade}
          onChangeEmail={onChangeEmail}
          sendData={sendData}
        />
      );
    } else if (formFlow === 2) {
      return (
        <ConfirmationForm
        //3.3 passe as props do exercicio 3 aqui
          birthDate={birthDate}
          telephone={telephone}
          city={city}
          onChangeBirthDate={onChangeBirthDate}
          onChangeTelephone={onChangeTelephone}
          onChangeCity={onChangeCity}
          sendForm={sendForm}
        />
      );
    } else {
      return <ConfirmationPage />;
    }
  };

  return <MainContainer>{mudarPagina()}</MainContainer>;
};

export default MainPage;
