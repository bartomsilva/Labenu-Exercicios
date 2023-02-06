import { useState, useId } from 'react'
import './App.css'
import products from './Components/Data'
import * as s from './styledApp'
import { Cards } from './Components/Cards'

function App() {


  const [product, setProduct] = useState(products)

  function genPro(){
    const nPro = +document.getElementById('ipro').value
    const prevProduct = [...product]
    const statsPro = product[nPro].pro
    prevProduct[nPro].pro=!statsPro
    setProduct(prevProduct)

  }

  return (
    <>
      <dir>
        <s.Generic>
          {
            product.filter(p => !p.pro).map(p => (
              <Cards key={useId()} prod={p} ></Cards>
            ))
          }
        </s.Generic>
        <s.Sold>
          {
            product.filter(p => p.pro).map(p => (
              <Cards key={useId()} prod={p} ></Cards>
            ))
          }
        </s.Sold>
        <s.Generic>


          <label htmlFor='num'>Produto Número</label>
          <input type="text" name="num" id='ipro' />
          <button onClick={genPro}>Promover/Tirar</button>


        </s.Generic>

      </dir>

    </>
  )
}

export default App
