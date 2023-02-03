import { useState } from 'react'
import './App.css'
import { Requireable } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export default function App() {
  const [count, setCount] = useState(0)
  
  const buscaImagens = () => {
    const arrRetorno = []
    var nImagem = ''
    for (let ind = 10; ind <= 100; ind++) {
      nImagem = '../public/'+ind + 'p-.jpg'
      nImagem?console.log("sim"):"não"
      arrRetorno.push(nImagem)
    }
    return arrRetorno

  }
  const arr =buscaImagens()
  console.log(arr)

  return (
    <>
      {arr.map( e=> 
        
        <img src={e}></img> )   }               
      
    </>
  )
}


