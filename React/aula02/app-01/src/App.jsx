import Garagem from './components/Garagem'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <>
      <Header />
      
      <main>
        <div className="App">
          <h1>Aula - Componentes React</h1>
        </div>
        <Garagem />
      </main>

      <Footer />

    </>
  )
}

export default App
