import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  
  return (
    <Form>
      <label>
        Data de Nascimento:
        <input placeholder="Data de nascimento" value={props.birthDate} onChange={props.onChangeBirthDate}/>
      </label>
      <label>
        Telefone:
        <input placeholder="Telefone" value={props.telephone} onChange={props.onChangeTelephone} />
      </label>
      <label>
        Cidade:
        <input placeholder="Cidade" value={props.city} onChange={props.onChangeCity}/>
      </label>
      <button onClick={props.sendForm}>Enviar dados</button>
    </Form >
  );
};

export default ConfirmationForm;