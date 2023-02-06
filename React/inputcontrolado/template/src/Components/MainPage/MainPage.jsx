import { React, useState } from 'react'
import { MainContainer, Form, Input } from './styles.jsx'

function MainPage() {

  const mForm = {
    name: "",
    age: "",
    email: "",
    pwd: ""
  }

  const [form, setForm] = useState(mForm)

  const handleChanceForm = (e) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
    console.log(e.currentTarget.value)
  }

  function resetForm() {
    const form = document.getElementById("form");
    form.reset();
    form.name.focus();
  }


return (
  <MainContainer>

    <h2>Formulário de inscrição</h2>
    <Form id='form'>
      <label htmlFor='name'>
        Nome:
        <Input type='text' name='name' id='name' value={form.name} onChange={handleChanceForm} />
      </label>
      <label htmlFor='age'>
        Idade:
        <Input type='number' name='age' id='age' value={form.age} onChange={handleChanceForm} />
      </label>
      <label htmlFor='email'>
        Email:
        <Input type='text' name='email' id='email' value={form.email} onChange={handleChanceForm} />
      </label>
      <label htmlFor='pwd'>
        Senha:
        <Input type='password' name='pwd' id='pwd' value={form.pwd} onChange={handleChanceForm} />
      </label>
      <button onClick={resetForm}>Enviar dados</button>
    </Form>
  </MainContainer>
)
}

export default MainPage
